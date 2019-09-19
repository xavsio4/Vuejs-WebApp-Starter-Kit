/**
 * JournalService.js
 *   
 * Example of api access using the api.js file
 * Declare here all necessary routes of the 
 * rest api you reach.
*/

import Api from "@/services/Api";

export default {
  getJournalEntry(_params) {
    return Api().get("/journal/" + 1);
  }
};