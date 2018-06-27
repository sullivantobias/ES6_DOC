/** Currency Format **/

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP"
});
const eur = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

const usdFormat = usd.format(455200666.8);
const gbpFormat = gbp.format(455200666.8);
const eurFormat = eur.format(455200666.8);

console.log(usdFormat, gbpFormat, eurFormat);

/** Date Format **/

const en = new Intl.DateTimeFormat("en-GB");
const de = new Intl.DateTimeFormat("de-DE");

const currentDate = "2018-06-27";
const enFormatDate = en.format(new Date(currentDate));
const deFormatDate = de.format(new Date(currentDate));

console.log(enFormatDate, deFormatDate);
