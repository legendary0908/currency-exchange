import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { CountryCodesService } from '../service/country.codes.service';

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
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  CurrencyRates: any;  
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  CountryCodes: any;

  constructor(
    private CurrencyService: CurrencyService,
    private CountryCodesService: CountryCodesService
  ) {}

  ngOnInit(): void {
    this.CountryCodes = this.CountryCodesService.getAllCountryCodes();
    this.CurrencyService.getData().subscribe(
      (rates: any) => {
        this.CurrencyRates = {};
        Object.keys(rates.data).forEach(key => {
          this.CurrencyRates[key] = rates.data[key].value;
        })
      }
    );
  }

  ngAfterViewInit(): void {
  }

  trackCurrency(index: number) {
    let tmp = this.CountryCodes.find((value: any) => (value.Country === this.allData[index].Country))
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
      this.allData[index].Amount / this.CurrencyRates[this.allData[index].Code]
      * this.CurrencyRates[this.allData[otherIndex].Code]
  }

  trackAmount(index: number) {
    this.calcOtherAmount(index);
  }

  getRateBasedUAH(currency: string) {
    const UAHRate = this.CurrencyRates["UAH"];
    const destRate = this.CurrencyRates[currency];
    const result = destRate / UAHRate;
    return result.toFixed(4)
  }
}
