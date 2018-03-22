import { getHistoricalPrice } from "../actions";

let initState = {
    crypto: "BTC",
    currency: "USD",
    arrCrypto: ['BTC', 'ETH', 'XRB', 'BCH'],
    arrCurrency: ['USD', 'EUR']
}

export default function(state = initState, action) {
  switch (action.type) {
    case "get_price":
        return {
            // ...state,
            // data: action.payload
            ...action.payload
        }
    default:
      return state;
  }
}
