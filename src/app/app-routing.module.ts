import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency-exchange/currency/currency.component';

const routes: Routes = [
  {path:'', component: CurrencyComponent},
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
