import axios from "axios";
import jsonData from '../data.json';

export function selectCurrency(currency) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "select_currency",
      payload: currency
    };
}
  
export function selectCrypto(crypto) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "select_crypto",
      payload: crypto
    };
}

export function getHistoricalPrice(crypto, currency, limit) {

  const url = "https://min-api.cryptocompare.com/data/histoday?fsym="+ crypto +"&tsym="+ currency +"&limit="+ limit +"&aggregate=3&e=CCCAGG";
  let historical = [];
  let dataPrice = jsonData[crypto][currency];

  const request = axios.get(url)
    .then((res) => {
      let hData = res.data.Data.map(data => ({
        x: (new Date(data.time * 1000)).getFullYear(), 
        y: data.close
      }));
      historical = [{
        "color": "steelblue", 
        "points": hData
      }];
      console.log(historical);
    }).catch ((error) => {
      console.log(error);
    });


  return {
    type: "get_price",
    payload: dataPrice
  }
}