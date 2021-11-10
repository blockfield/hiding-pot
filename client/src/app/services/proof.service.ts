import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProofService {

  constructor() { }

  public async generateProof(
    root: Object,
    nullifierHash: string,
    nullifier: string,
    secret: string,
    pathElements: Object[],
    pathIndex: number[]
  ): Promise<Object> {
    return await (window as any).witness({
      root, nullifierHash, nullifier, secret, pathElements, pathIndex
    })
  }
}
