import { Injectable } from '@angular/core';
import { TakerModel } from '../models/taker.model';
import { Contract } from './contract';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class TakeService {

  constructor(
    private walletService: WalletService,
  ) { }

  public take(model: TakerModel): void {
    console.log(model)
    console.log(this.walletService.privateKey)

    if (!this.walletService.privateKey) {
      return
    }

    new Contract(this.walletService.privateKey)
  }
}
