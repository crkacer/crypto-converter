import { createStore, applyMiddleware } from 'redux';
import {crypto, currency, arrCrypto, arrCurrency} from './data/';
import promise from "redux-promise";
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const defaultState = {
  crypto,
  currency,
  arrCrypto,
  arrCurrency,
  dataPrice: []
};


const store = createStoreWithMiddleware(rootReducer, defaultState);

export default store;
