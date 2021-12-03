import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    research_response:{},
    searched:false,
    searchedDone:false,
    searchStr:""
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
    },
    updateSearchStr(state,v){
      console.log("before",state.searchStr)
      state.searchStr=v
      console.log("after",state.searchStr)
    },
    getSearchStr(state){
      return state.searchStr;
    }
  },
  actions: {
    search({commit,state}) {
      var strsearch='https://ndl.sinux.sh/find?search='+state.searchStr
      console.log(strsearch)
      axios.get(strsearch)
      .then(function (response) {
        commit("setSearchedDone",false)
        commit("setSearched",true)
        setTimeout(() => {
        commit("setResearch",response.data.data);
        commit("setSearchedDone",true)
        console.log(response.data.data)
        //alert (response.data);
        }, 2000);
        


      })
      .catch(function (error) {
        alert(error);
      });
    }
    
  },
  modules: {
  }
})
