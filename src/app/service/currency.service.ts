import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders (
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_tcmpNBTfKz6ic3ZvkDV9C6PorsLXtzJTTw9XX35A";
  
  constructor(private http: HttpClient) {}

  getData(): Observable<object> {
    return this.http.get(this.currencyURL, httpOptions);
  }
}
