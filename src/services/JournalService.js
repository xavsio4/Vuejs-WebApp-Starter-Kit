/**
 * JournalService.js
 *   
 * Example of api access using the api.js file
 * Declare here all necessary routes of the 
 * rest api you reach.
*/

import Api from "./api";

export default {
  getJournalEntry(id) {
    return Api().get("/journal/" + id);
  },

  getSearchJournal(search) {
    return Api().get("/journal/search" + search);
  },

  getSearchJournalcontent(search) {
    return Api().get("/journal/searchcontent?s=" + search);
  },

  deleteJournalEntry(id) {
    return Api().delete('/journal/'+id);
  },

  updateJournalEntry(id) {
    return Api().put('/journal/'+id);
  },

  addJournalEntry(_params) {
    return Api().post("/journal/create");
  },

  getJournalList() {
    return Api().get("/journal/");
  }

};