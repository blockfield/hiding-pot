import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/account.model';
import { StorageService } from 'src/app/services/storage.service';

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
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.initAccounts()
  }

  public initAccounts(): void {
    this.accounts = this.storageService.get<AccountModel[]>(this.accountsKey) || []
  }

  public selectAccount(account: AccountModel): void {
    this.selectedAccount = account
  }

  public createNewAccount(): void {
    this.accounts.push(this.newAccount)
    this.selectedAccount = this.newAccount

    this.newAccount = new AccountModel()
  }

}
