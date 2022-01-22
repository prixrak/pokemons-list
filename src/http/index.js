import axios from "axios";

// set base url for all requests
export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})