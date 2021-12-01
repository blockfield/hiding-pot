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
    pathIndex: string[]
  ): Promise<Object> {
    console.log('generate Proof params', root, nullifierHash, nullifier, secretHash, pathElements, pathIndex)

    let params = {
      root: root,
      nullifierHash: nullifierHash,
      nullifier: nullifier,
      secret: secretHash,
      pathElements: pathElements,
      pathIndex: pathIndex
    }

    console.log('params after object', params)

    return await (window as any).witness(params)
  }
}
