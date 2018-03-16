import { selectCurrency } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case "select_currency":
      return action.payload;
    default:
      return state;
  }
}
