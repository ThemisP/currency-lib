import Currency, { CURRENCIES } from "../src/index";

describe("Format number tests", () => {
  const currency = new Currency({
    amount: 10,
    currency: CURRENCIES.USD
  })

  it("toAmount() should return '10.00'", () => {
    expect(currency.toAmount()).toBe("10.00");
  });
  it("toCent() should return '1000'", () => {
    expect(currency.toCent()).toBe("1000");
  });
  it("toFormat(\"SS AA\") should return '$ 10.00'", () => {
    expect(currency.toFormat("SS AA")).toBe("$ 10.00");
  });
  it("toFormat(\"NNN SS AA\") should return 'United States dollar $ 10.00'", () => {
    expect(currency.toFormat("NNN SS AA")).toBe("United States dollar $ 10.00");
  });
  it("toFormat(\"CCC AA SS\") should return 'USD 10.00 $'", () => {
    expect(currency.toFormat("CCC AA SS")).toBe("USD 10.00 $");
  });
});