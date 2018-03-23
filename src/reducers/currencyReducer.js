import { SELECT_CURRENCY } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CURRENCY:
      return action.payload;
    default:
      return state;
  }
}
