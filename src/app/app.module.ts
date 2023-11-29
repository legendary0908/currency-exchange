import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangeModule } from './currency-exchange/currency-exchange.module';
import { PasswordValidationModule } from './password-validation/password-validation.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CurrencyExchangeModule,
    PasswordValidationModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
