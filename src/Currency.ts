import BigNumber from "bignumber.js";
import { CURRENCIES, CURRENCY_DETAILS } from "./Currencies";

type getRatesFn = (from: string, to: string) => Promise<number>;

export default class Currency {
  private static getRates: getRatesFn;
  private amount: BigNumber = new BigNumber(0);
  private currency: CURRENCIES = CURRENCIES.USD;
  constructor(value: { amount: number | string | BigNumber, currency: CURRENCIES } | Currency) {
    if (value instanceof Currency) {
      this.amount = new BigNumber(value.amount);
      this.currency = value.currency;
    } else {
      this.amount = new BigNumber(value.amount);
      this.currency = value.currency;
    }
  }
  static config(config: { getRates: getRatesFn }) {
    Currency.getRates = config.getRates;
  }
  toAmount(): string {
    const details = CURRENCY_DETAILS[this.currency];
    return this.amount.toFixed(details.digits);
  }
  toCent(): string {
    const details = CURRENCY_DETAILS[this.currency];
    return this.amount.multipliedBy(Math.pow(10, details.digits)).toFixed(0);
  }
  /**
   * CCC - Currency Name
   * SS - Symbol
   * AA - Amount
   * NNN - Long Name
   * @param template 
   * @returns 
   */
  toFormat(template: string = "SS AA"): string {
    template = template.replace("AA", this.toAmount());
    template = template.replace("CCC", this.currency);
    template = template.replace("SS", CURRENCY_DETAILS[this.currency].symbol);
    template = template.replace("NNN", CURRENCY_DETAILS[this.currency].name);
    return template;
  }

  async convertTo(currency: CURRENCIES): Promise<Currency> {
    const rate = await Currency.getRates(this.currency, currency);
    return new Currency({
      amount: this.amount.multipliedBy(rate),
      currency
    });
  }

  plus(value: number | string): Currency {
    return new Currency({
      amount: this.amount.plus(value),
      currency: this.currency
    });
  }
  minus(value: number | string): Currency {
    return new Currency({
      amount: this.amount.minus(value),
      currency: this.currency
    });
  }
  multipliedBy(value: number | string): Currency {
    return new Currency({
      amount: this.amount.multipliedBy(value),
      currency: this.currency
    });
  }
  dividedBy(value: number | string): Currency {
    return new Currency({
      amount: this.amount.dividedBy(value),
      currency: this.currency
    });
  }
  isGreaterThan(value: number | string): boolean {
    return this.amount.isGreaterThan(value);
  }
  isGreaterThanOrEqualTo(value: number | string): boolean {
    return this.amount.isGreaterThanOrEqualTo(value);
  }
  isLessThan(value: number | string): boolean {
    return this.amount.isLessThan(value);
  }
  isLessThanOrEqualTo(value: number | string): boolean {
    return this.amount.isLessThanOrEqualTo(value);
  }
  isEqualTo(value: number | string): boolean {
    return this.amount.isEqualTo(value);
  }


};