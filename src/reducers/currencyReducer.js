import { SELECT_CURRENCY } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CURRENCY:
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
