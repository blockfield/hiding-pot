import { Injectable } from '@angular/core';
import * as sha from "js-sha256";
import { DepositerModel } from '../models/depositer.model';
import { Contract } from './contract';
import { HashService } from './hash.service';
import { ProofService } from './proof.service';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(
    private hashService: HashService,
    private proofService: ProofService,
    private walletService: WalletService,
  ) { }

  public async deposit(model: DepositerModel): Promise<void> {
    console.log(model)
    console.log(this.walletService.privateKey)

    if (!this.walletService.privateKey) {
      return
    }
  
    let contract = new Contract(this.walletService.privateKey)

    let pathElements: Object[] = []
    for (let i = 0; i < 5; i++) {
      pathElements.push(await contract.filledSubtrees(i))
    }

    let index = await contract.nextIndex()

    let secretHash = Buffer.from(sha.sha256(model.secret)).slice(0, 248).toString('hex')
    let nullifier =  Buffer.from(sha.sha256(secretHash)).slice(0, 248).toString('hex')
    let commitment = this.hashService.pedersenHash496(nullifier, secretHash)

    let pathIndex: number[] = [+index % 2] // todo ?

    contract.deposit(commitment, model.amount)

    let root = await contract.getLastRoot()
    let nullifierHash = this.hashService.pedersenHash248(nullifier)

    this.proofService.generateProof(root, nullifierHash, nullifier, secretHash, pathElements, pathIndex)

  }
}
