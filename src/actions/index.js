import axios from "axios";


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