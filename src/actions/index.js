import axios from "axios";
import {defaultData} from '../data/';


export const SELECT_CURRENCY = "select_currency";
export const SELECT_CRYPTO = "select_crypto";
export const GET_PRICE = "get_price";



export function selectCurrency(currency) {

    return {
      type: SELECT_CURRENCY,
      payload: currency
    };
}
  
export function selectCrypto(crypto) {

    return {
      type: SELECT_CRYPTO,
      payload: crypto
    };
}

export function getHistoricalPrice(crypto, currency, limit) {

  const url = "https://min-api.cryptocompare.com/data/histoday?fsym="+ crypto +"&tsym="+ currency +"&limit="+ limit +"&aggregate=3&e=CCCAGG";
  let historical = [];
  let hData = [];
  let dataPrice = defaultData[crypto][currency];

  const request = axios.get(url)
    .then((res) => {
      hData = res.data.Data.map(data => ({
        name: (new Date(data.time * 1000)).getMonth() + "-" + (new Date(data.time * 1000)).getFullYear(), 
        uv: data.close
      }));

      return hData;
    }).catch ((error) => {
      console.log(error);
      return [];
    });
 
  return {
    type: GET_PRICE,
    payload: request
  }
}