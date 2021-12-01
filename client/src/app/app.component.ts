import { Component, OnInit } from '@angular/core';
import { Contract } from './services/contract';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng-client';

  public myBalance: number|null = null

  constructor(
    public walletService: WalletService
  ) {}

  ngOnInit(): void {
    setInterval(async () => {
      if (!this.walletService.privateKey) {
        return
      }

      this.myBalance = await new Contract(this.walletService.privateKey).getMyBalance()
    }, 50000)
  }

}
