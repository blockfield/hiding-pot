import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from 'src/app/models/account.model';
import { StorageService } from 'src/app/services/storage.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  private accountsKey = 'accounts'

  public accounts: AccountModel[] = []
  public selectedAccount: AccountModel|null = null
  public newAccount: AccountModel = new AccountModel()

  constructor(
    private modalService: NgbModal,
    private storageService: StorageService,
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
    this.initAccounts()
  }

  public addNew(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      () => {},
      () => {}
    );
  }

  public initAccounts(): void {
    this.accounts = this.storageService.get<AccountModel[]>(this.accountsKey) || []
  }

  public selectAccount(account: AccountModel): void {
    this.selectedAccount = account

    this.walletService.privateKey = this.selectedAccount.privateKey
  }

  public createNewAccount(): void {
    this.accounts.push(this.newAccount)
    this.selectAccount(this.newAccount)

    this.storageService.set(this.accountsKey, this.accounts)

    this.newAccount = new AccountModel()
  }

}
