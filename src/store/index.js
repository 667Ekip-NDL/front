import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    research_response:{},
    searched:false,
  },
  mutations: {
    setResearch(state,r){
      state.research_response=r
    },
    setSearched(state,b){
      state.searched=b
    }
  },
  actions: {
    search({commit}) {
      axios.get('https://ndl.sinux.sh/test')
      .then(function (response) {
        commit("setSearched",true)
        commit("setResearch",response.data.data);
        //alert (response.data);


      })
      .catch(function (error) {
        alert(error);
      });
    }
    
  },
  modules: {
  }
})
