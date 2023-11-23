import Currency, { CURRENCIES } from "../src";


Currency.config({
  getRates: (from, to) => {
    if (from === "EUR" && to === "USD") {
      return Promise.resolve(1.2);
    }
    if (from === "USD" && to === "EUR") {
      return Promise.resolve(1 / 1.2);
    }
    if (from === "USD" && to === "JPY") {
      return Promise.resolve(1 / 0.009);
    }
    if (from === "JPY" && to === "USD") {
      return Promise.resolve(0.009);
    };
    return Promise.resolve(1);
  }
})

describe("Currency conversion tests", () => {
  const usd = new Currency({
    amount: 10,
    currency: CURRENCIES.USD
  })
  it("10 USD converted to EUR assuming 1.2 eur to usd rate is 8.33", async () => {
    const eur = await usd.convertTo(CURRENCIES.EUR);
    expect(eur.toAmount()).toBe("8.33");
  })
  it("10 USD converted to JPY assuming 0.009 usd to jpy rate is 1111", async () => {
    const jpy = await usd.convertTo(CURRENCIES.JPY);
    expect(jpy.toAmount()).toBe("1111");
  });
});