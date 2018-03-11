import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const SELECT_CURRENCY = "select_currency";
export const SELECT_CRYPTO = "select_crypto";


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
