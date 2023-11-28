export class CurrencyRate {
    currencyURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_tcmpNBTfKz6ic3ZvkDV9C6PorsLXtzJTTw9XX35A_";
    rates: any = {}
    constructor(){
        this.loadData();
    }

    async loadData() {
        const response = await fetch(this.currencyURL);
        const data = await response.json();
        Object.keys(data.data).forEach(key=>{
            this.rates[key] = data.data[key].value
        })
    }

    getRate(code: string) {
        return this.rates[code];
    }
}