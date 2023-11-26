import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../currency-service/currency.rate';
import CurrencyCodes from '../currency-service/code.currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit, AfterViewInit {
  allData = [
    {
      "Country": "Ukraine",
      "CountryCode": "UA",
      "Currency": "Hryvnia",
      "Code": "UAH",
      Amount: 1
    },
    {
      "Country": "Ukraine",
      "CountryCode": "UA",
      "Currency": "Hryvnia",
      "Code": "UAH",
      Amount: 1
    }
  ];
  Rate = new CurrencyRate();
  CurrencyCodeInformation = CurrencyCodes;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  trackCurrency(index: number) {
    let tmp = this.CurrencyCodeInformation.find(value => (value.Country === this.allData[index].Country))
    if (tmp) {
      this.allData[index] = {
        ...tmp,
        Amount: this.allData[index].Amount
      }
    }
    this.calcOtherAmount(index);
  }

  calcOtherAmount(index: number) {
    let otherIndex = 1 - index;
    this.allData[otherIndex].Amount = 
    this.allData[index].Amount / this.Rate.getRate(this.allData[index].Code) 
    * this.Rate.getRate(this.allData[otherIndex].Code) 
  }

  trackAmount(index: number) {
    this.calcOtherAmount(index);
  }
}
