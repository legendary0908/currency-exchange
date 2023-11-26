import codeCurrency from "./code.currency";

describe('Code Currency Information Checking', () => {

    it('check currency information', () => {
        expect(codeCurrency.find(value => (value.Country === "United States"))?.CountryCode).toBe("US")
    });

});