import { createStore } from 'redux';
import {crypto, currency, arrCrypto, arrCurrency} from './data/';

import rootReducer from './reducers/index';

const defaultState = {
  crypto,
  currency,
  arrCrypto,
  arrCurrency,
  dataPrice: []
};

const store = createStore(rootReducer, defaultState);

export default store;
