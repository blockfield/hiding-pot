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
  ): Promise<any> {

    let params = {
      root: root,
      nullifierHash: nullifierHash,
      nullifier: nullifier,
      secret: secretHash,
      pathElements: pathElements,
      pathIndex: pathIndex
    }

    return await (window as any).witness(params)
  }
}
