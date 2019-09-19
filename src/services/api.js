/**
 * api.js 
 * This file holds the base url(s) for the API used by 
 * the webApp vue template. In this case, we assume only 
 * one baseUrl and json data transmission.
 * 
 */
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://journable-gzav151329.codeanyapp.com/api/web/v1/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
