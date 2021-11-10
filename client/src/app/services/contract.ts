// @ts-ignore
import * as LikeLib from "likelib";
import { abiContract } from "../api/abi-contract";
import { Proof } from "../models/proof";

export class Contract {
    private lk: LikeLib
    private account: LikeLib.Account
    private myPublicKey: string
    private contract: LikeLib.Contract

    constructor(privateKey: string) {
        this.account = new LikeLib.Account(privateKey)
        this.myPublicKey = this.account.getAddress()

        this.lk = new LikeLib("ws://localhost:50051")
        this.contract = LikeLib.Contract.deployed(this.lk, this.account, abiContract.abi, abiContract.address)
        this.contract._setupMethods(abiContract.abi)
    }

    public async deposit(commitment: string, amount: number): Promise<void> {
        return new Promise((resolve) => {
            console.log('CALLING method `deposit`', commitment, amount)
            this.contract.deposit(commitment, amount, 500000, function(err: any, info: any) {
                console.log('RESULT in method `deposit`', err, info)
                if (err) {
                    console.log('ERROR in method `deposit`', err)
                }

                resolve()
            })
        })
    }

    public async withdraw(proof: Proof, root: string, nullifierHash: string): Promise<void> {
        return new Promise((resolve) => {
            console.log('CALLING method `withdraw`', proof, root, nullifierHash)
            this.contract.deposit(proof.a, proof.b, proof.c, [root, nullifierHash], 0, 500000, function(err: any, info: any) {
                console.log('RESULT in method `withdraw`', err, info)
                if (err) {
                    console.log('ERROR in method `withdraw`', err)
                }

                resolve()
            })
        })
    }

    public async getMyBalance(): Promise<number> {
        return new Promise((resolve) => {
            console.log('CALLING method `getMyBalance`', this.myPublicKey)
            this.lk.getAccountInfo(this.myPublicKey, function(err: any, info: any) {
                console.log('RESULT in method `getMyBalance`', err, info)
                if (err) {
                    console.log('ERROR in method `getMyBalance`', err)
                }

                resolve(+1234567)
            })
        })
    }

    public async getLastRoot(): Promise<Object> {
        return new Promise((resolve) => {
            console.log('CALLING method `getLastRoot`')
            this.contract.getLastRoot(0, 500000, function(err: any, info: any) {
                console.log('RESULT in method `getLastRoot`', err, info)
                if (err) {
                    console.log('ERROR in method `getLastRoot`', err)
                }

                resolve(info[0])
            })
        })
    }

    public async filledSubtrees(index: number): Promise<Object> {
        return new Promise((resolve) => {
            console.log('CALLING method `filledSubtrees`', index)
            this.contract.filledSubtrees(index, 0, 500000, function(err: any, info: any) {
                console.log('RESULT in method `filledSubtrees`', err, info)
                if (err) {
                    console.log('ERROR in method `filledSubtrees`', err)
                }

                resolve(info[0])
            })
        })
    }

    public async nextIndex(): Promise<Object> {
        return new Promise((resolve) => {
            console.log('CALLING method `nextIndex`')
            this.contract.nextIndex(0, 500000, function(err: any, info: any) {
                console.log('RESULT in method `nextIndex`', err, info)
                if (err) {
                    console.log('ERROR in method `nextIndex`', err)
                }

                resolve(info[0])
            })
        })
    }
}