const url =
  'https://api.currencyapi.com/v3/latest?apikey=8DVTdRS75ytYV7QAavO7ygpldO0EL1punjiZ6GL6';

let currencies = [];
let convertToCode = null;
let result = null;

async function currencyConvertor(val, cur) {
  try {
    const fetchedData = await fetch(url);
    const cleanData = await fetchedData.json();

    Object.keys(cleanData.data).map((e) => {
      if (e === cur) {
        convertToCode = e;
        result = cleanData.data[e].value * val;
        console.log(result, convertToCode);
        console.log('Task2 done!');
      }
    });
  } catch (e) {
    console.log(e);
  }
}

currencyConvertor(100, 'AUD');
