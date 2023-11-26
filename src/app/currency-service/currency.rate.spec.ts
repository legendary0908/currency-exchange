import {CurrencyRate} from "./currency.rate";

describe('Currency Rate Checking', () => {

    it('get rate checking', async () => {
        const rate = new CurrencyRate();
        await rate.loadData();
        expect(rate.getRate("USD")).toBe(1)
    });

    it('get rate of EUR checking', async () => {
        const rate = new CurrencyRate();
        await rate.loadData();
        expect(rate.getRate("EUR")).toBeLessThan(1)
    });

});