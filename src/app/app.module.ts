import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangeModule } from './currency-exchange/currency-exchange.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CurrencyExchangeModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
