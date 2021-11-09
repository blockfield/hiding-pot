import { Component, OnInit } from '@angular/core';
import { TakerModel } from 'src/app/models/taker.model';

@Component({
  selector: 'app-taker',
  templateUrl: './taker.component.html',
  styleUrls: ['./taker.component.less']
})
export class TakerComponent implements OnInit {

  public model: TakerModel = new TakerModel()
  public amount: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
