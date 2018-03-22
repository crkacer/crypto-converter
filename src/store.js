import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
let crypto = ['BTC', 'ETH', 'XRB', 'BCH'];
let currency = ['USD', 'EUR'];
let defaultCrypto = "BTC";
let defaultCurrency = "USD";

const defaultState = {
  crypto,
  currency
};

const store = createStore(rootReducer, defaultState);

export default store;
