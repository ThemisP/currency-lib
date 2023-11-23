import Currency, { CURRENCIES } from "../src"


describe("Arithmetic Tests USD 10", () => {
  const currency = new Currency({
    amount: 10,
    currency: CURRENCIES.USD
  });

  it(".isEqualTo(...) tests", () => {
    expect(currency.isEqualTo(10)).toBe(true);
    expect(currency.isEqualTo(10.50)).toBe(false);
  });

  it(".isGreaterThan(..) tests", () => {
    expect(currency.isGreaterThan(5)).toBe(true);
    expect(currency.isGreaterThan(10)).toBe(false);
    expect(currency.isGreaterThan(15)).toBe(false);
  });

  it(".isGreaterThanOrEqualTo(..) tests", () => {
    expect(currency.isGreaterThanOrEqualTo(5)).toBe(true);
    expect(currency.isGreaterThanOrEqualTo(10)).toBe(true);
    expect(currency.isGreaterThanOrEqualTo(15)).toBe(false);
  });

  it(".isLessThan(..) tests", () => {
    expect(currency.isLessThan(5)).toBe(false);
    expect(currency.isLessThan(10)).toBe(false);
    expect(currency.isLessThan(15)).toBe(true);
  });

  it(".isLessThanOrEqualTo(..) tests", () => {
    expect(currency.isLessThanOrEqualTo(5)).toBe(false);
    expect(currency.isLessThanOrEqualTo(10)).toBe(true);
    expect(currency.isLessThanOrEqualTo(15)).toBe(true);
  });
});