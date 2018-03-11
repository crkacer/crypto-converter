import { SELECT_CRYPTO } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CRYPTO:
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
