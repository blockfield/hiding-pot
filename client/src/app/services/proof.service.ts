import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProofService {

  constructor() { }

  public generateProof(
    root: Object,
    nullifierHash: string,
    nullifier: string,
    secret: string,
    pathElements: Object[],
    pathIndex: number[]
  ): Object {
    return {}
  }
}
