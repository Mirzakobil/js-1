dataJson = require('./task1-data.json')
const EUR = 0.92
dataJson.data.forEach((e) =>{
    const dollarPrices = e.Prices;
    e.currency = "Dollar";
    const euroPrices = e.Prices;
    console.log(e.currency)
    console.log('USD', dollarPrices)
    for(price in dollarPrices){
        const euroPrice = dollarPrices[price]*EUR; 
        dollarPrices[price] = +parseFloat(euroPrice.toFixed(2))
    }
    e.currency="Euro";
    console.log(e.currency)
    console.log('EUR', euroPrices)
}
)
