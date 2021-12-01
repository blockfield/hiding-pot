import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import { DepositerModel } from 'src/app/models/depositer.model';
import { DepositService } from 'src/app/services/deposit.service';

@Component({
  selector: 'app-depositer',
  templateUrl: './depositer.component.html',
  styleUrls: ['./depositer.component.less']
})
export class DepositerComponent implements OnInit {
  public faCopy = faCopy

  public model: DepositerModel = new DepositerModel()
  public amount: string = '10'

  public isGenerating: boolean = false
  public proof: string = ''
  public isCopied: boolean = false

  constructor(
    private clipboardService: ClipboardService,
    private depositService: DepositService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  public deposit(content: any): void {
    if (this.amount !== '10') {
      return;
    }

    this.isGenerating = true

    this.model.amount = +this.amount

    this.depositService.deposit(this.model).then(
      (proof: string) => {
        this.isGenerating = false
        
        if (!proof) {
          return
        }

        this.proof = proof

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
          () => {},
          () => {}
        );
      }
    )
  }

  public copyProof(): void {
    this.clipboardService.copy(this.proof)
    this.isCopied = true
  }

}
