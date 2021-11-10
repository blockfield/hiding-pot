import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  public pedersenHash496(bNullifier: Buffer, bSecretHash: Buffer): string {
    return (window as any).signalHash496(bNullifier, bSecretHash)
  }

  public pedersenHash248(bNullifier: Buffer): string {
    return (window as any).signalHash248(bNullifier)
  }
}
