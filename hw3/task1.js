const dollarPriceData = require('./task1-data.json')
const euroPriceData = Object.assign({}, dollarPriceData)
const EUR = 0.92


dollarPriceData.data.forEach((e) =>{
    e.currency = "USD";
    const dollarPrices = e.Prices;
    console.log(e.currency, dollarPrices)
}
)

euroPriceData.data.forEach((e) =>{
    e.currency = "EUR";
    const euroPrices = e.Prices;
    for(price in euroPrices){
        const euroPrice = euroPrices[price]*EUR; 
        euroPrices[price] = +parseFloat(euroPrice.toFixed(2))
    }
    console.log(e.currency, euroPrices)
}
)
