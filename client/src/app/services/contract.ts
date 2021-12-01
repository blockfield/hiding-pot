// @ts-ignore
import * as LikeLib from "likelib";

import { abiContract } from "../api/abi-contract";
import { Proof } from "../models/proof";

export class Contract {
    static balance = 1000

    private lk: LikeLib
    private account: LikeLib.Account
    private myPublicKey: string
    private contract: LikeLib.Contract

    constructor(privateKey: string) {
        this.account = new LikeLib.Account(privateKey)
        this.myPublicKey = this.account.getAddress()

        console.log('my public key', this.myPublicKey)

        this.lk = new LikeLib("ws://localhost:50051")
        this.contract = LikeLib.Contract.deployed(this.lk, this.account, abiContract.abi, abiContract.address)
        this.contract._setupMethods(abiContract.abi)
    }

    public async deposit(commitment: string, amount: number): Promise<void> {
        return new Promise((resolve) => {
            console.log('CALLING method `deposit`', commitment, amount)

            Contract.balance = Contract.balance - 10

            resolve()
            // this.contract.deposit(commitment, amount * 10**9, 500000, function(err: any, info: any) {
            //     console.log('RESULT in method `deposit`', err, info)
            //     if (err) {
            //         console.log('ERROR in method `deposit`', err)
            //     }

            //     resolve()
            // })
        })
    }

    public async withdraw(proof: Proof, root: string, nullifierHash: string): Promise<void> {
        return new Promise((resolve) => {
            console.log('CALLING method `withdraw`', proof, root, nullifierHash)

            let j = 0
            for (let i = 0; i < 1000000000; i++) {
                j++
            }

            Contract.balance = Contract.balance + 10

            resolve()
            // this.contract.withdraw(proof.a, proof.b, proof.c, [root, nullifierHash], 0, 500000, function(err: any, info: any) {
            //     console.log('RESULT in method `withdraw`', err, info)
            //     if (err) {
            //         console.log('ERROR in method `withdraw`', err)
            //     }

            //     resolve()
            // })
        })
    }

    public async getMyBalance(): Promise<number> {
        return new Promise((resolve) => {
            console.log('CALLING method `accountInfo`')

            resolve(Contract.balance)
            // this.lk.getAccountInfo(this.myPublicKey, function(err: any, info: any) {
            //     if (err) {
            //         console.log('ERROR in method `getMyBalance`', err)
            //     }

            //     resolve(+info.balance)
            // })
        })
    }

    public async getLastRoot(): Promise<string> {
        return new Promise((resolve) => {
            console.log('CALLING method `getLastRoot`')

            resolve("0x101739eff77bcb95d4af1de11c07e2462efac778c017891a7e1e468cdce8e0e3")
            // this.contract.getLastRoot(0, 500000, function(err: any, info: any) {
            //     console.log('RESULT in method `getLastRoot`', err, info)
            //     if (err) {
            //         console.log('ERROR in method `getLastRoot`', err)
            //     }

            //     resolve(info[0])
            // })
        })
    }

    public async filledSubtrees(index: number): Promise<string> {
        return new Promise((resolve) => {
            console.log('CALLING method `filledSubtrees`', index)

            resolve("0x101739eff77bcb95d4af1de11c07e2462efac778c017891a7e1e468cdce8e0e3")
            // this.contract.filledSubtrees(index, 0, 500000, function(err: any, info: any) {
            //     console.log('RESULT in method `filledSubtrees`', err, info)
            //     if (err) {
            //         console.log('ERROR in method `filledSubtrees`', err)
            //     }

            //     resolve(info[0].substring(2))
            // })
        })
    }

    public async nextIndex(): Promise<number> {
        return new Promise((resolve) => {
            console.log('CALLING method `nextIndex`')
            
            resolve(0)
            // this.contract.nextIndex(0, 500000, function(err: any, info: any) {
            //     console.log('RESULT in method `nextIndex`', err, info)
            //     if (err) {
            //         console.log('ERROR in method `nextIndex`', err)
            //     }

            //     resolve(info[0])
            // })
        })
    }
}