export enum CURRENCIES {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BOV = "BOV",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYN = "BYN",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHE = "CHE",
  CHF = "CHF",
  CHW = "CHW",
  CLF = "CLF",
  CLP = "CLP",
  COP = "COP",
  COU = "COU",
  CRC = "CRC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRU = "MRU",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MXV = "MXV",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  CNY = "CNY",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLE = "SLE",
  SLL = "SLL",
  SOS = "SOS",
  SRD = "SRD",
  SSP = "SSP",
  STN = "STN",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  USN = "USN",
  UYI = "UYI",
  UYU = "UYU",
  UYW = "UYW",
  UZS = "UZS",
  VED = "VED",
  VES = "VES",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XAG = "XAG",
  XAU = "XAU",
  XBA = "XBA",
  XBB = "XBB",
  XBC = "XBC",
  XBD = "XBD",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPD = "XPD",
  XPF = "XPF",
  XPT = "XPT",
  XSU = "XSU",
  XTS = "XTS",
  XUA = "XUA",
  XXX = "XXX",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWL = "ZWL"
}

export const CURRENCY_DETAILS: {
  [key: string]: {
    symbol: string;
    name: string;
    digits: number;
  }
} = Object.freeze({
  "AED": {
    "symbol": "د.م.",
    "name": "United Arab Emirates dirham",
    "digits": 2
  },
  "AFN": {
    "symbol": "؋",
    "name": "Afghan afghani",
    "digits": 2
  },
  "ALL": {
    "symbol": "Lek",
    "name": "Albanian lek",
    "digits": 2
  },
  "AMD": {
    "symbol": "Դ",
    "name": "Armenian dram",
    "digits": 2
  },
  "ANG": {
    "symbol": "ƒ",
    "name": "Netherlands Antillean guilder",
    "digits": 2
  },
  "AOA": {
    "symbol": "is",
    "name": "Angolan kwanza",
    "digits": 2
  },
  "ARS": {
    "symbol": "$",
    "name": "Argentine peso",
    "digits": 2
  },
  "AUD": {
    "symbol": "$",
    "name": "Australian dollar",
    "digits": 2
  },
  "AWG": {
    "symbol": "ƒ",
    "name": "Aruban florin",
    "digits": 2
  },
  "AZN": {
    "symbol": "₼",
    "name": "Azerbaijani manat",
    "digits": 2
  },
  "BAM": {
    "symbol": "КМ",
    "name": "Bosnia and Herzegovina convertible mark",
    "digits": 2
  },
  "BBD": {
    "symbol": "$",
    "name": "Barbados dollar",
    "digits": 2
  },
  "BDT": {
    "symbol": "৳",
    "name": "Bangladeshi taka",
    "digits": 2
  },
  "BGN": {
    "symbol": "лв",
    "name": "Bulgarian lev",
    "digits": 2
  },
  "BHD": {
    "symbol": "ب.د",
    "name": "Bahraini dinar",
    "digits": 3
  },
  "BIF": {
    "symbol": "₣",
    "name": "Burundian franc",
    "digits": 0
  },
  "BMD": {
    "symbol": "$",
    "name": "Bermudian dollar",
    "digits": 2
  },
  "BND": {
    "symbol": "$",
    "name": "Brunei dollar",
    "digits": 2
  },
  "BOB": {
    "symbol": "Bs.",
    "name": "Boliviano",
    "digits": 2
  },
  "BOV": {
    "symbol": "Mvdol",
    "name": "Bolivian Mvdol (funds code)",
    "digits": 2
  },
  "BRL": {
    "symbol": "R$",
    "name": "Brazilian real",
    "digits": 2
  },
  "BSD": {
    "symbol": "$",
    "name": "Bahamian dollar",
    "digits": 2
  },
  "BTN": {
    "symbol": "Nu",
    "name": "Bhutanese ngultrum",
    "digits": 2
  },
  "BWP": {
    "symbol": "P",
    "name": "Botswana pula",
    "digits": 2
  },
  "BYN": {
    "symbol": "p.",
    "name": "Belarusian ruble",
    "digits": 2
  },
  "BZD": {
    "symbol": "$",
    "name": "Belize dollar",
    "digits": 2
  },
  "CAD": {
    "symbol": "$",
    "name": "Canadian dollar",
    "digits": 2
  },
  "CDF": {
    "symbol": "₣",
    "name": "Congolese franc",
    "digits": 2
  },
  "CHE": {
    "symbol": "",
    "name": "WIR euro (complementary currency)",
    "digits": 2
  },
  "CHF": {
    "symbol": "₣",
    "name": "Swiss franc",
    "digits": 2
  },
  "CHW": {
    "symbol": "",
    "name": "WIR franc (complementary currency)",
    "digits": 2
  },
  "CLF": {
    "symbol": "",
    "name": "Unidad de Fomento (funds code)",
    "digits": 4
  },
  "CLP": {
    "symbol": "$",
    "name": "Chilean peso",
    "digits": 0
  },
  "COP": {
    "symbol": "$",
    "name": "Colombian peso",
    "digits": 2
  },
  "COU": {
    "symbol": "",
    "name": "Unidad de Valor Real (UVR) (funds code)[6]",
    "digits": 2
  },
  "CRC": {
    "symbol": "₡",
    "name": "Costa Rican colon",
    "digits": 2
  },
  "CUP": {
    "symbol": "₱",
    "name": "Cuban peso",
    "digits": 2
  },
  "CVE": {
    "symbol": "$",
    "name": "Cape Verdean escudo",
    "digits": 2
  },
  "CZK": {
    "symbol": "Kč",
    "name": "Czech koruna",
    "digits": 2
  },
  "DJF": {
    "symbol": "₣",
    "name": "Djiboutian franc",
    "digits": 0
  },
  "DKK": {
    "symbol": "kr.",
    "name": "Danish krone",
    "digits": 2
  },
  "DOP": {
    "symbol": "$",
    "name": "Dominican peso",
    "digits": 2
  },
  "DZD": {
    "symbol": "د.ج",
    "name": "Algerian dinar",
    "digits": 2
  },
  "EGP": {
    "symbol": "£",
    "name": "Egyptian pound",
    "digits": 2
  },
  "ERN": {
    "symbol": "Nfk",
    "name": "Eritrean nakfa",
    "digits": 2
  },
  "ETB": {
    "symbol": "Br",
    "name": "Ethiopian birr",
    "digits": 2
  },
  "EUR": {
    "symbol": "€",
    "name": "Euro",
    "digits": 2
  },
  "FJD": {
    "symbol": "$",
    "name": "Fiji dollar",
    "digits": 2
  },
  "FKP": {
    "symbol": "£",
    "name": "Falkland Islands pound",
    "digits": 2
  },
  "GBP": {
    "symbol": "£",
    "name": "Pound sterling",
    "digits": 2
  },
  "GEL": {
    "symbol": "ლ",
    "name": "Georgian lari",
    "digits": 2
  },
  "GHS": {
    "symbol": "₵",
    "name": "Ghanaian cedi",
    "digits": 2
  },
  "GIP": {
    "symbol": "£",
    "name": "Gibraltar pound",
    "digits": 2
  },
  "GMD": {
    "symbol": "D",
    "name": "Gambian dalasi",
    "digits": 2
  },
  "GNF": {
    "symbol": "₣",
    "name": "Guinean franc",
    "digits": 0
  },
  "GTQ": {
    "symbol": "Q",
    "name": "Guatemalan quetzal",
    "digits": 2
  },
  "GYD": {
    "symbol": "$",
    "name": "Guyanese dollar",
    "digits": 2
  },
  "HKD": {
    "symbol": "$",
    "name": "Hong Kong dollar",
    "digits": 2
  },
  "HNL": {
    "symbol": "L",
    "name": "Honduran lempira",
    "digits": 2
  },
  "HTG": {
    "symbol": "G",
    "name": "Haitian gourde",
    "digits": 2
  },
  "HUF": {
    "symbol": "Ft",
    "name": "Hungarian forint",
    "digits": 2
  },
  "IDR": {
    "symbol": "Rp",
    "name": "Indonesian rupiah",
    "digits": 2
  },
  "ILS": {
    "symbol": "₪",
    "name": "Israeli new shekel",
    "digits": 2
  },
  "INR": {
    "symbol": "₨",
    "name": "Indian rupee",
    "digits": 2
  },
  "IQD": {
    "symbol": "ع.د",
    "name": "Iraqi dinar",
    "digits": 3
  },
  "IRR": {
    "symbol": "﷼",
    "name": "Iranian rial",
    "digits": 2
  },
  "ISK": {
    "symbol": "Kr",
    "name": "Icelandic króna (plural: krónur)",
    "digits": 0
  },
  "JMD": {
    "symbol": "$",
    "name": "Jamaican dollar",
    "digits": 2
  },
  "JOD": {
    "symbol": "د.ا",
    "name": "Jordanian dinar",
    "digits": 3
  },
  "JPY": {
    "symbol": "¥",
    "name": "Japanese yen",
    "digits": 0
  },
  "KES": {
    "symbol": "Sh",
    "name": "Kenyan shilling",
    "digits": 2
  },
  "KGS": {
    "symbol": "лв",
    "name": "Kyrgyzstani som",
    "digits": 2
  },
  "KHR": {
    "symbol": "៛",
    "name": "Cambodian riel",
    "digits": 2
  },
  "KMF": {
    "symbol": "FC",
    "name": "Comoro franc",
    "digits": 0
  },
  "KPW": {
    "symbol": "₩",
    "name": "North Korean won",
    "digits": 2
  },
  "KRW": {
    "symbol": "₩",
    "name": "South Korean won",
    "digits": 0
  },
  "KWD": {
    "symbol": "د.ك",
    "name": "Kuwaiti dinar",
    "digits": 3
  },
  "KYD": {
    "symbol": "$",
    "name": "Cayman Islands dollar",
    "digits": 2
  },
  "KZT": {
    "symbol": "〒",
    "name": "Kazakhstani tenge",
    "digits": 2
  },
  "LAK": {
    "symbol": "₭",
    "name": "Lao kip",
    "digits": 2
  },
  "LBP": {
    "symbol": "ل.ل",
    "name": "Lebanese pound",
    "digits": 2
  },
  "LKR": {
    "symbol": "Rs",
    "name": "Sri Lankan rupee",
    "digits": 2
  },
  "LRD": {
    "symbol": "$",
    "name": "Liberian dollar",
    "digits": 2
  },
  "LSL": {
    "symbol": "L",
    "name": "Lesotho loti",
    "digits": 2
  },
  "LYD": {
    "symbol": "ل.د",
    "name": "Libyan dinar",
    "digits": 3
  },
  "MAD": {
    "symbol": "د.م.",
    "name": "Moroccan dirham",
    "digits": 2
  },
  "MDL": {
    "symbol": "L",
    "name": "Moldovan leu",
    "digits": 2
  },
  "MGA": {
    "symbol": "MK",
    "name": "Malagasy ariary",
    "digits": 2
  },
  "MKD": {
    "symbol": "ден",
    "name": "Macedonian denar",
    "digits": 2
  },
  "MMK": {
    "symbol": "Myanmar is K",
    "name": "Myanmar kyat",
    "digits": 2
  },
  "MNT": {
    "symbol": "₮",
    "name": "Mongolian tögrög",
    "digits": 2
  },
  "MOP": {
    "symbol": "P",
    "name": "Macanese pataca",
    "digits": 2
  },
  "MRU": {
    "symbol": "UM",
    "name": "Mauritanian ouguiya",
    "digits": 2
  },
  "MUR": {
    "symbol": "₨",
    "name": "Mauritian rupee",
    "digits": 2
  },
  "MVR": {
    "symbol": "ރ",
    "name": "Maldivian rufiyaa",
    "digits": 2
  },
  "MWK": {
    "symbol": "MK",
    "name": "Malawian kwacha",
    "digits": 2
  },
  "MXN": {
    "symbol": "$",
    "name": "Mexican peso",
    "digits": 2
  },
  "MXV": {
    "symbol": "-",
    "name": "Mexican Unidad de Inversion (UDI) (funds code)",
    "digits": 2
  },
  "MYR": {
    "symbol": "RM",
    "name": "Malaysian ringgit",
    "digits": 2
  },
  "MZN": {
    "symbol": "MTn",
    "name": "Mozambican metical",
    "digits": 2
  },
  "NAD": {
    "symbol": "$",
    "name": "Namibian dollar",
    "digits": 2
  },
  "NGN": {
    "symbol": "₦",
    "name": "Nigerian naira",
    "digits": 2
  },
  "NIO": {
    "symbol": "C$",
    "name": "Nicaraguan córdoba",
    "digits": 2
  },
  "NOK": {
    "symbol": "kr",
    "name": "Norwegian krone",
    "digits": 2
  },
  "NPR": {
    "symbol": "₨",
    "name": "Nepalese rupee",
    "digits": 2
  },
  "NZD": {
    "symbol": "$",
    "name": "New Zealand dollar",
    "digits": 2
  },
  "OMR": {
    "symbol": "﷼",
    "name": "Omani rial",
    "digits": 3
  },
  "PAB": {
    "symbol": "B/.",
    "name": "Panamanian balboa",
    "digits": 2
  },
  "PEN": {
    "symbol": "S/.",
    "name": "Peruvian sol",
    "digits": 2
  },
  "PGK": {
    "symbol": "K",
    "name": "Papua New Guinean kina",
    "digits": 2
  },
  "PHP": {
    "symbol": "₱",
    "name": "Philippine peso[10]",
    "digits": 2
  },
  "PKR": {
    "symbol": "₨",
    "name": "Pakistani rupee",
    "digits": 2
  },
  "PLN": {
    "symbol": "zł",
    "name": "Polish złoty",
    "digits": 2
  },
  "PYG": {
    "symbol": "₲",
    "name": "Paraguayan guaraní",
    "digits": 0
  },
  "QAR": {
    "symbol": "ر.ق",
    "name": "Qatari riyal",
    "digits": 2
  },
  "RON": {
    "symbol": "L",
    "name": "Romanian leu",
    "digits": 2
  },
  "RSD": {
    "symbol": "din",
    "name": "Serbian dinar",
    "digits": 2
  },
  "CNY": {
    "symbol": "¥",
    "name": "Renminbi[11]",
    "digits": 2
  },
  "RUB": {
    "symbol": "₽",
    "name": "Russian ruble",
    "digits": 2
  },
  "RWF": {
    "symbol": "₣",
    "name": "Rwandan franc",
    "digits": 0
  },
  "SAR": {
    "symbol": "ر.س",
    "name": "Saudi riyal",
    "digits": 2
  },
  "SBD": {
    "symbol": "$",
    "name": "Solomon Islands dollar",
    "digits": 2
  },
  "SCR": {
    "symbol": "Rs",
    "name": "Seychelles rupee",
    "digits": 2
  },
  "SDG": {
    "symbol": "£",
    "name": "Sudanese pound",
    "digits": 2
  },
  "SEK": {
    "symbol": "kr",
    "name": "Swedish krona (plural: kronor)",
    "digits": 2
  },
  "SGD": {
    "symbol": "$",
    "name": "Singapore dollar",
    "digits": 2
  },
  "SHP": {
    "symbol": "£",
    "name": "Saint Helena pound",
    "digits": 2
  },
  "SLE": {
    "symbol": "",
    "name": "Sierra Leonean leone (new leone)[12][13][14]",
    "digits": 2
  },
  "SLL": {
    "symbol": "Le",
    "name": "Sierra Leonean leone (old leone)[12][13][14][15]",
    "digits": 2
  },
  "SOS": {
    "symbol": "Sh",
    "name": "Somali shilling",
    "digits": 2
  },
  "SRD": {
    "symbol": "$",
    "name": "Surinamese dollar",
    "digits": 2
  },
  "SSP": {
    "symbol": "SS£",
    "name": "South Sudanese pound",
    "digits": 2
  },
  "STN": {
    "symbol": "Db",
    "name": "São Tomé and Príncipe dobra",
    "digits": 2
  },
  "SVC": {
    "symbol": "",
    "name": "Salvadoran colón",
    "digits": 2
  },
  "SYP": {
    "symbol": "£",
    "name": "Syrian pound",
    "digits": 2
  },
  "SZL": {
    "symbol": "L",
    "name": "Swazi lilangeni",
    "digits": 2
  },
  "THB": {
    "symbol": "฿",
    "name": "Thai baht",
    "digits": 2
  },
  "TJS": {
    "symbol": "ЅМ",
    "name": "Tajikistani somoni",
    "digits": 2
  },
  "TMT": {
    "symbol": "m",
    "name": "Turkmenistan manat",
    "digits": 2
  },
  "TND": {
    "symbol": "د.ت",
    "name": "Tunisian dinar",
    "digits": 3
  },
  "TOP": {
    "symbol": "T$",
    "name": "Tongan paʻanga",
    "digits": 2
  },
  "TRY": {
    "symbol": "TL",
    "name": "Turkish lira",
    "digits": 2
  },
  "TTD": {
    "symbol": "$",
    "name": "Trinidad and Tobago dollar",
    "digits": 2
  },
  "TWD": {
    "symbol": "NT$",
    "name": "New Taiwan dollar",
    "digits": 2
  },
  "TZS": {
    "symbol": "Sh",
    "name": "Tanzanian shilling",
    "digits": 2
  },
  "UAH": {
    "symbol": "₴",
    "name": "Ukrainian hryvnia",
    "digits": 2
  },
  "UGX": {
    "symbol": "Sh",
    "name": "Ugandan shilling",
    "digits": 0
  },
  "USD": {
    "symbol": "$",
    "name": "United States dollar",
    "digits": 2
  },
  "USN": {
    "symbol": "",
    "name": "United States dollar (next day) (funds code)",
    "digits": 2
  },
  "UYI": {
    "symbol": "",
    "name": "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
    "digits": 0
  },
  "UYU": {
    "symbol": "$",
    "name": "Uruguayan peso",
    "digits": 2
  },
  "UYW": {
    "symbol": "",
    "name": "Unidad previsional[17]",
    "digits": 4
  },
  "UZS": {
    "symbol": "лв",
    "name": "Uzbekistan sum",
    "digits": 2
  },
  "VED": {
    "symbol": "",
    "name": "Venezuelan digital bolívar[18]",
    "digits": 2
  },
  "VES": {
    "symbol": "",
    "name": "Venezuelan sovereign bolívar[10]",
    "digits": 2
  },
  "VND": {
    "symbol": "₫",
    "name": "Vietnamese đồng",
    "digits": 0
  },
  "VUV": {
    "symbol": "Vt",
    "name": "Vanuatu vatu",
    "digits": 0
  },
  "WST": {
    "symbol": "$",
    "name": "Samoan tala",
    "digits": 2
  },
  "XAF": {
    "symbol": "FCFA",
    "name": "CFA franc BEAC",
    "digits": 0
  },
  "XAG": {
    "symbol": "",
    "name": "Silver (one troy ounce)",
    "digits": 0
  },
  "XAU": {
    "symbol": "",
    "name": "Gold (one troy ounce)",
    "digits": 0
  },
  "XBA": {
    "symbol": "",
    "name": "European Composite Unit (EURCO) (bond market unit)",
    "digits": 0
  },
  "XBB": {
    "symbol": "",
    "name": "European Monetary Unit (E.M.U.-6) (bond market unit)",
    "digits": 0
  },
  "XBC": {
    "symbol": "",
    "name": "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
    "digits": 0
  },
  "XBD": {
    "symbol": "",
    "name": "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
    "digits": 0
  },
  "XCD": {
    "symbol": "$",
    "name": "East Caribbean dollar",
    "digits": 2
  },
  "XDR": {
    "symbol": "",
    "name": "Special drawing rights",
    "digits": 0
  },
  "XOF": {
    "symbol": "Franc",
    "name": "CFA franc BCEAO",
    "digits": 0
  },
  "XPD": {
    "symbol": "",
    "name": "Palladium (one troy ounce)",
    "digits": 0
  },
  "XPF": {
    "symbol": "Franc",
    "name": "CFP franc (franc Pacifique)",
    "digits": 0
  },
  "XPT": {
    "symbol": "",
    "name": "Platinum (one troy ounce)",
    "digits": 0
  },
  "XSU": {
    "symbol": "",
    "name": "SUCRE",
    "digits": 0
  },
  "XTS": {
    "symbol": "",
    "name": "Code reserved for testing",
    "digits": 0
  },
  "XUA": {
    "symbol": "",
    "name": "ADB Unit of Account",
    "digits": 0
  },
  "XXX": {
    "symbol": "",
    "name": "No currency",
    "digits": 0
  },
  "YER": {
    "symbol": "﷼",
    "name": "Yemeni rial",
    "digits": 2
  },
  "ZAR": {
    "symbol": "R",
    "name": "South African rand",
    "digits": 2
  },
  "ZMW": {
    "symbol": "ZK",
    "name": "Zambian kwacha",
    "digits": 2
  },
  "ZWL": {
    "symbol": "$",
    "name": "Zimbabwean dollar (fifth)[g]",
    "digits": 2
  }
});