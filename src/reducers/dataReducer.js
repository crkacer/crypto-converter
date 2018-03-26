import { GET_PRICE } from "../actions";

let initState = {
    crypto: "BTC",
    currency: "USD",
    arrCrypto: ['BTC', 'ETH', 'XRB', 'BCH'],
    arrCurrency: ['USD', 'EUR']
}

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PRICE:
        return action.payload;
    default:
        return state;
  }
}
