import { combineReducers } from "redux";
import CurrencyReducer from "./currencyReducer";
import CryptoReducer from "./cryptoReducer";

const rootReducer = combineReducers({
  currency: CurrencyReducer,
  crypto: CryptoReducer
});

export default rootReducer;
