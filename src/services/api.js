/**
 * api.js 
 * This file holds the base url(s) for the API used by 
 * the webApp vue template. In this case, we assume only 
 * one baseUrl and json data transmission.
 * 
 */

 import Vue from 'vue'
import axios from "axios";
import toast from "./../toast";


//We create an instance of axios
const axiosAPI =
  axios.create({
    baseURL: "http://api.journable/v1/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  });

//we add a global error interceptor on this instance
axiosAPI.interceptors.response.use(
  function (response) { return response; },
  function (error) {
    // Do something with response error
    if (error.response.status === 401) {
      Vue.prototype.toast.error('You are not authorized to perform this operation','Aouch !');
      auth.logout();
      router.replace('/auth/login');
    }
  
    if (error.response.status === 403) {
      console.log('403: unauthorized, You need to log in');
      Vue.prototype.toast.error('You are not authorized to perform this operation','Aouch !');
      router.replace('/auth/login');
    }

    if (error.response.status === 500) {
      console.log('500: The service you are accessing seems to have a problem');
      router.replace('/auth/login');
    }

    console.log('init')
    return Promise.reject(error.response);
  },
);

//let's roll
export default () => {
  return axiosAPI;
};
