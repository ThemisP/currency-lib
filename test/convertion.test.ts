import Currency, { CURRENCIES } from "../src";

describe("Currency conversion tests", () => {
  const usd = new Currency({
    amount: 10,
    currency: CURRENCIES.USD
  })

});