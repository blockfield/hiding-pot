import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProofService {

  constructor() { }

  public async generateProof(
    root: string,
    nullifierHash: string,
    nullifier: string,
    secretHash: string,
    pathElements: string[],
    pathIndex: number[]
  ): Promise<Object> {
    console.log('generate Proof params', root, nullifierHash, nullifier, secretHash, pathElements, pathIndex)

    return await (window as any).witness({
      root, nullifierHash, nullifier, secretHash, pathElements, pathIndex
    })
  }
}
