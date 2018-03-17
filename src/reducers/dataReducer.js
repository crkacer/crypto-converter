import { getHistoricalPrice } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case "get_price":
        {
            return action.payload;
        }
      
    default:
      return state;
  }
}
