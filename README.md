# Currency Library

[![npm version](https://badge.fury.io/js/bcurrency.svg)](https://www.npmjs.com/package/bcurrency)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This is an npm package allowing you to work with currencies and amounts in a precise and error free way. It is based on bignumber.js and provides a simple interface for working with currencies. 

Currently it supports many Currencies and is easily extendable to support more. (Crypto comming soon).

## Installation

You can install this package using npm or yarn:

```bash
npm install currency-library
# or
yarn add currency-library
```


## Usage

```javascript
const Currency = require("bcurrency");


const usd = new Currency({
  amount: 10,
  currency: "USD"
})

const eur = new Currency({
  amount: 10,
  currency: "EUR"
})
```

## Configuration (currency Exchange)!

One of the most important features of this library is converting between currencies. Since currencies are constantly changing in value it is important to be able gather live data of the exchange rates. You need to configure a way to get the exchange rates for the currencies you are using. The library provides a simple interface to provide the exchange rate.

```javascript
Currency.config({
  getRates: async (from, to) => {
    // here you should return the correct rate depending on the currencies
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
    return 1;
  }
})
```

By providing this function you can use the Exchange methods on the Currency object.

```javascript
const usd = new Currency({
  amount: 10,
  currency: "USD"
})

const eur = await usd.convertTo("EUR");
eur.toAmount() // "8.33"

const jpy = await usd.convertTo("JPY");
jpy.toAmount() // "1111"
```

## API

### new Currency({amount, currency})

Create a Currency object
**Parameters:**

- `amount` (number | string | BigNumber) - The amount of the currency
- `currency` (string) - The currency code

- You could also pass an existing Currency object to create a new one with the same amount and currency.

**Returns:**

- (Currency)

**Example:**

```javascript
// Example 1
const usd = new Currency({
  amount: 10,
  currency: "USD"
})

// Example 2
const eur = new Currency({
  amount: "10.00",
  currency: "EUR"
}) 

// Example 3
const usd2 = new Currency(usd) // Copy of usd object
```


### .toAmount()

Returns only the amount as a string. The amount will be returned in the correct number of decimals depending on the currency (e.g. USD will return 2 decimals, JPY will return 0 decimals).

**Returns:**

- (string)


**Example:**

```javascript
// Example 1
const usd = new Currency({
  amount: 10,
  currency: "USD"
})

usd.toAmount() // "10.00"
```


### .toCent()

Returns only the amount as a string converted to cents. The amount will be multiplied by 10 to the power of digits for each currency for example `10 USD` is `1000 cents` and `10 JPY` is `10 cents`.

**Returns:**

- (string)


**Example:**

```javascript
// Example 1
const usd = new Currency({
  amount: 10,
  currency: "USD"
})

usd.toCent() // "1000"
```

### .toFormat(template)

Return the amount and currency formatted as a string. The template can be used to format the string. The following placeholders are available:
  - `CCC` - Currency Code (e.g. USD, EUR)
  - `SS` - Currency Symbol (e.g. $, €)
  - `AA` - Amount (e.g. 10.00)
  - `NNN` - Currency Name (e.g. US Dollar, Euro)

**Returns:**

- template: (string) - The template to use for formatting if the string contains any of the placeholders above they will be replaced with the correct value.

**Returns:**

- (string)


**Example:**

```javascript
// Example 1
const usd = new Currency({
  amount: 10,
  currency: "USD"
})

usd.toFormat() // "$ 10.00" default if no template is provided
usd.toFormat("CCC AA") // "USD 10.00"
usd.toFormat("SS AA") // "$ 10.00"
usd.toFormat("NNN AA") // "US Dollar 10.00"
usd.toFormat("NNN AA CCC") // "US Dollar 10.00 USD"
usd.toFormat("NNN AA CCC SS") // "US Dollar 10.00 USD $"
```


### arithmetic methods
- .plus(value: number | string) **return** (Currency)
- .minus(value: number | string) **return** (Currency)
- .multipliedBy(value: number | string) **return** (Currency)
- .dividedBy(value: number | string) **return** (Currency)

These methods are used to perform arithmetic operations on the currency object. They all return a new Currency object with the result of the operation. They only modify the value of the currency the currency code stays the same.

### comparison methods
- .isGreaterThan(value: number | string) **return** (boolean)
- .isGreaterThanOrEqualTo(value: number | string) **return** (boolean)
- .isLessThan(value: number | string) **return** (boolean)
- .isLessThanOrEqualTo(value: number | string) **return** (boolean)
- .isEqualTo(value: number | string) **return** (boolean)


## Contributions

Please create a changeset file for your changes before you sumbit a pull request.

```
  npx changeset
```