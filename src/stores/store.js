/**
 * store.js
 * This files is the main access to vuex functionnalities
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import JournalService from '../services/JournalService'

Vue.use(Vuex)

/*
** This example targets the jList array in tablelist.vue component that holds the data
*/

export default new Vuex.Store({
  state: {
    jList: null,
  },

  getters: {
    get_JournalList: state => state.jList,
  },

  mutations: {
    mut_getJournalList: (state, payload) => state.jList = payload,
    mut_deleteJournal: (state, payload) => state.jList.map((item, i) => item.id === payload ? state.JournalList.splice(i, 1) : null)
  },

  actions: {

    act_deteteJournal ({ commit }, id) {
        const headers = { 'Authorization': 'Bearer Pub1uq1abSI6cy1_7iNm_e3tmzndFzEsGsLYKMsx' }
        headers = ''
        axios.delete(`http://api.journable/v1/journal/${id}`, { headers })
          .then(() => commit('mut_deleteJournal', id))
          .catch(e => console.log(e))
      },

    act_getJournalList ({ commit }) {
      axios.get('http://api.journable/v1/journal')
        .then(res => commit('mut_getJournalList', res.data.items))
        .catch(e => console.log(e))

     // JournalService.getJournalList()
     //.then(res => commit('mut_getJournalList', res.data.items))
     //.catch(e => console.log(e));  
    },

    act_addJournal ({ dispatch }, newQuestion) {
        const data = `content=${newJournal.content}&title=${newJournal.title}`
        if (newJournal.content.length > 0) {
          axios.post('http://api.journable/v1/journal/create', data)
            .then(() => {
              dispatch('act_getJournalList')
             // newQuestion.question = ''
             // newQuestion.answer = ''
            })
            .catch(e => console.log(e))
        }
      },

   /* act_addJournal ({ dispatch }, newQuestion) {
      const headers = { 'Authorization': 'Bearer Pub1uq1abSI6cy1_7iNm_e3tmzndFzEsGsLYKMsx' }
      const data = `question=${newQuestion.question}&answer=${newQuestion.answer}`
      if (newQuestion.question.length > 0 && newQuestion.answer.length > 0) {
        axios.post('http://api.faqadelic.com/v1/faqq/create', data, { headers })
          .then(() => {
            dispatch('act_getFAQList')
            newQuestion.question = ''
            newQuestion.answer = ''
          })
          .catch(e => console.log(e))
      }
    }, */

    act_editJournal ({}, faqItem) {
      const headers = { 'Authorization': 'Bearer Pub1uq1abSI6cy1_7iNm_e3tmzndFzEsGsLYKMsx' }
      const data = `answer=${faqItem.answer}&question=${faqItem.question}`
      axios.patch(`http://api.faqadelic.com/v1/faqq/update?id=${faqItem.id}&token=abrarara`, data, { headers })
        .then(res => console.log(res))
        .catch(e => console.log(e))
    },

    act_assignGroup ({}, { faqItem, group }) {
      const headers = { 'Authorization': 'Bearer Pub1uq1abSI6cy1_7iNm_e3tmzndFzEsGsLYKMsx' }
      const data = `faq_id=${faqItem.id}&group_id=${group.id}`
      const arr = []
      faqItem.groups.map(item => arr.push(item.id))
			if (!arr.includes(group.id)) {
        axios.post('http://api.faqadelic.com/v1/groupfaq/create', data, { headers })
          .then(() => faqItem.groups.push(group))
          .catch(e => console.log(e))
			}
    }
  }
})