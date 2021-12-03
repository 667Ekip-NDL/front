import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    research_response:Array(),
    searched:false,
    searchedDone:false,
    searchStr:""
  },
  mutations: {
    setResearch(state,r){
      state.research_response=(state.research_response).concat(r);
    },
    resetResearch(state){
      state.research_response=Array();
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
      //rset array
      commit("resetResearch");

      //sauvetages
      var strsearch='https://ndl.sinux.sh/findsauvetage?search='+state.searchStr
      console.log(strsearch)
      axios.get(strsearch)
      .then(function (response) {
        commit("setSearchedDone",false)
        commit("setSearched",true)
        //setTimeout(() => {
        commit("setResearch",response.data.data);
        //commit("setSearchedDone",true)
        console.log(response.data.data)
        //alert (response.data);
        //}, 2000);

      })
      .catch(function (error) {
        alert(error);
      });

      //personnes
      var strsearch2='https://ndl.sinux.sh/findpersonne?search='+state.searchStr
      console.log(strsearch2)
      axios.get(strsearch2)
      .then(function (response) {
        //commit("setSearchedDone",false)
        //commit("setSearched",true)
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
