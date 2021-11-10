import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  public pedersenHash496(nullifier: Object, secretHash: string): string {
    return (window as any).signalHash496(
      0,
      10,
      1
    )
  }

  public pedersenHash248(nullifier: Object): string {
    return (window as any).signalHash248(
      1,
      10,
      1
    )
  }
}
