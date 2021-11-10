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

    let pathElements: string[] = []
    const pathElementsCount = 1
    for (let i = 0; i < pathElementsCount; i++) {
      pathElements.push(await contract.filledSubtrees(i))
    }

    console.log('pathElements', pathElements)

    let index = await contract.nextIndex()

    console.log('nextIndex', index)

    console.log('sha256 secret', sha.sha256(model.secret))
    let secretHash = Buffer.from(sha.sha256(model.secret), 'hex').slice(0, 31)
    console.log('secretHash', secretHash)

    console.log('sha256 nullifier', sha.sha256(secretHash))
    let nullifier =  Buffer.from(sha.sha256(secretHash), 'hex').slice(0, 31)
    console.log('nullifier', nullifier)

    let commitment = this.hashService.pedersenHash496(nullifier, secretHash)
    console.log('commitment', commitment)

    let pathIndex: number[] = [index % 2] // todo ?

    await contract.deposit(commitment, model.amount)

    let root = await contract.getLastRoot()
    console.log('root', root)
    let nullifierHash = this.hashService.pedersenHash248(nullifier)

    let proof = await this.proofService.generateProof(root, nullifierHash, nullifier.toString('hex'), secretHash.toString('hex'), pathElements, pathIndex)

    console.log('GENERATED!', proof)
  }
}
