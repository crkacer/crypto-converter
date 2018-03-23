import { SELECT_CRYPTO } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CRYPTO:
      return action.payload;
    default:
      return state;
  }
}
