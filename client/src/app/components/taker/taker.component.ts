import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TakerModel } from 'src/app/models/taker.model';
import { TakeService } from 'src/app/services/take.service';

@Component({
  selector: 'app-taker',
  templateUrl: './taker.component.html',
  styleUrls: ['./taker.component.less']
})
export class TakerComponent implements OnInit {

  public model: TakerModel = new TakerModel()
  public amount: string = ''

  public isWithdrawing: boolean = false

  constructor(
    private modalService: NgbModal,
    private takeService: TakeService,
  ) { }

  ngOnInit(): void {
  }

  public take(content: any): void {
    if (this.amount !== '10') {
      return;
    }

    this.isWithdrawing = true

    this.model.amount = +this.amount

    this.takeService.take(this.model).then(
      (isSuccess: boolean) => {
        this.isWithdrawing = false
        
        if (!isSuccess) {
          return
        }

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
          () => {},
          () => {}
        );
      }
    )
  }

}
