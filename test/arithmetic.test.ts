import Currency, { CURRENCIES } from "../src"


describe("Arithmetic Tests", () => {
  const currency = new Currency({
    amount: 10,
    currency: CURRENCIES.USD
  });

  it("plus(10) should return 20.00", () => {
    expect(currency.plus(10).toAmount()).toBe("20.00");
  });
  it("minus(10) should return 0.00", () => {
    expect(currency.minus(10).toAmount()).toBe("0.00");
  });
  it("multipliedBy(10) should return 100.00", () => {
    expect(currency.multipliedBy(10).toAmount()).toBe("100.00");
  });
  it("dividedBy(10) should return 1.00", () => {
    expect(currency.dividedBy(10).toAmount()).toBe("1.00");
  });
})