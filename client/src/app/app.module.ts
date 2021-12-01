import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositerComponent } from './components/depositer/depositer.component';
import { TakerComponent } from './components/taker/taker.component';
import { AccountComponent } from './components/account/account.component';
import { NoCommaPipe } from './pipes/no-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DepositerComponent,
    NoCommaPipe,
    TakerComponent,
    AccountComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ClipboardModule,
    NgbModule,
    NgxLocalStorageModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
