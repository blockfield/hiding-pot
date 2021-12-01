import { Injectable } from '@angular/core';
import { TakerModel } from '../models/taker.model';
import { Proof } from '../models/proof';
import { Contract } from './contract';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class TakeService {

  constructor(
    private walletService: WalletService,
  ) { }

  public async take(model: TakerModel): Promise<boolean> {
    if (!this.walletService.privateKey) {
      return false
    }

    let contract = new Contract(this.walletService.privateKey)

    let proofList = model.proof.split(':')

    if (proofList.length != 10) {
      return false
    }

    let proof = new Proof(
      [proofList[0], proofList[1]],
      [[proofList[2], proofList[3]], [proofList[4], proofList[5]]],
      [proofList[6], proofList[7]]
    )

    await contract.withdraw(proof, proofList[8], proofList[9])

    return true
  }
}
