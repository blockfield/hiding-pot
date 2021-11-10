import { Component, OnInit } from '@angular/core';
import { TakerModel } from 'src/app/models/taker.model';
import { TakeService } from 'src/app/services/take.service';

@Component({
  selector: 'app-taker',
  templateUrl: './taker.component.html',
  styleUrls: ['./taker.component.less']
})
export class TakerComponent implements OnInit {

  public model: TakerModel = new TakerModel()
  public amount: string = '10'

  constructor(
    private takeService: TakeService,
  ) { }

  ngOnInit(): void {
  }

  public take(): void {
    if (this.amount !== '10') {
      return;
    }

    this.model.amount = +this.amount

    this.takeService.take(this.model)
  }

}
