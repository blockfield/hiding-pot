import { Component, OnInit } from '@angular/core';
import { DepositerModel } from 'src/app/models/depositer.model';

@Component({
  selector: 'app-depositer',
  templateUrl: './depositer.component.html',
  styleUrls: ['./depositer.component.less']
})
export class DepositerComponent implements OnInit {

  public model: DepositerModel = new DepositerModel()
  public amount: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
