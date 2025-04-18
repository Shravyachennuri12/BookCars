import CurrencyConverter from './index.js'

const amount = 100
const currencyConverter = new CurrencyConverter({ from: 'USD', to: 'INR', amount })

const res = await currencyConverter.convert()

console.log(`${amount} USD = ${res} INR`)
