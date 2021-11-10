import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public privateKey: string|null = null

  constructor() { }
}
