import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    research_response:{},
    searched:false,
    searchedDone:false,
  },
  mutations: {
    setResearch(state,r){
      state.research_response=r
    },
    setSearched(state,b){
      state.searched=b
    },
    setSearchedDone(state,b){
      state.searchedDone=b
    }
  },
  actions: {
    search({commit}) {
      axios.get('https://ndl.sinux.sh/test')
      .then(function (response) {
        commit("setSearched",true)
        setTimeout(() => {
        commit("setResearch",response.data.data);
        commit("setSearchedDone",true)
        console.log(response.data.data)
        //alert (response.data);
        }, 4000);
        


      })
      .catch(function (error) {
        alert(error);
      });
    }
    
  },
  modules: {
  }
})
