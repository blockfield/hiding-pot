import { Injectable } from '@angular/core';
import * as sha from "js-sha256";
// @ts-ignore
import * as BN from 'bn.js';
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
    const pathElementsCount = 5
    for (let i = 0; i < pathElementsCount; i++) {
      let pathElement = await contract.filledSubtrees(i)
      console.log(pathElement)
      let bnPathElement = this.hexToBigNumber(pathElement.slice(2))

      pathElements.push(bnPathElement.toString())
    }

    let index = await contract.nextIndex()
    
    let secretHash = sha.sha256(model.secret)
    let bSecretHash = Buffer.from(secretHash, 'hex').slice(0, 31)
    let bnSecretHash = this.hexToBigNumber(bSecretHash.toString('hex'))
    
    let nullifier = sha.sha256(bSecretHash.toString('hex'))
    let bNullifier =  Buffer.from(nullifier, 'hex').slice(0, 31)
    let bnNullifier = this.hexToBigNumber(bNullifier.toString('hex'))

    let nullifierHash = this.hashService.pedersenHash248(bNullifier.reverse())

    let commitment = this.hashService.pedersenHash496(bNullifier.reverse(), bSecretHash.reverse())

    let pathIndex = this.createPathsFromIndex(index)

    await contract.deposit(commitment, model.amount)

    let root = await contract.getLastRoot()
    let bnRoot = this.hexToBigNumber(root.slice(2))

    let proof = await this.proofService.generateProof(bnRoot.toString(), nullifierHash, bnNullifier.toString(), bnSecretHash.toString(), pathElements, pathIndex)

    console.log('GENERATED!', proof)
  }

  private createPathsFromIndex(index: number): string[] {
    const pathIndexLength = 5
    let pathIndex = index.toString(2).split('').reverse()

    if (pathIndex.length >= pathIndexLength) {
      return pathIndex.slice(0, pathIndexLength)
    }

    while (pathIndex.length !== pathIndexLength) {
      pathIndex.push('0')
    }

    return pathIndex
  }

  private hexToBigNumber(hex: string): BN {
    return new BN(hex, 16)
  }
}
