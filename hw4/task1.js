const url =
  'https://api.currencyapi.com/v3/latest?apikey=8DVTdRS75ytYV7QAavO7ygpldO0EL1punjiZ6GL6';

let currencies = [];
let convertToCode = null;
let result = null;

function currencyConvertor(val, cur) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      currencies = res;

      Object.keys(currencies.data).map((e) => {
        if (e === cur) {
          convertToCode = e;
          result = currencies.data[e].value * val;
          console.log(result, convertToCode);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Task1 done!');
    });
}

currencyConvertor(100, 'UZS');
