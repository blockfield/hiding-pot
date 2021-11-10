import { Component, OnInit } from '@angular/core';
import { DepositerModel } from 'src/app/models/depositer.model';
import { DepositService } from 'src/app/services/deposit.service';

@Component({
  selector: 'app-depositer',
  templateUrl: './depositer.component.html',
  styleUrls: ['./depositer.component.less']
})
export class DepositerComponent implements OnInit {

  public model: DepositerModel = new DepositerModel()
  public amount: string = '10'

  constructor(
    private depositService: DepositService,
  ) { }

  ngOnInit(): void {
  }

  public deposit(): void {
    if (this.amount !== '10') {
      return;
    }

    this.model.amount = +this.amount

    this.depositService.deposit(this.model)
  }

}
