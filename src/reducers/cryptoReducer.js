import { selectCrypto } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case "select_crypto":
      return action.payload;
    default:
      return state;
  }
}
