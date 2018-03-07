import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const SELECT_CURRENCY = "select_currency";
export const SELECT_CRYPTO = "select_crypto";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

