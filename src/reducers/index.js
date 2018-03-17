import { combineReducers } from "redux";
import CurrencyReducer from "./currencyReducer";
import CryptoReducer from "./cryptoReducer";
import DataReducer from "./dataReducer";

const rootReducer = combineReducers({
  currency: CurrencyReducer,
  crypto: CryptoReducer,
  dataPrice: DataReducer
});

export default rootReducer;
