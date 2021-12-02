<template>
    <div class="home__header">
      <span class="home__header__title">Sauveteurs du dunkerquois</span>
      <ul class="home__header__links">
        <li>Accueil</li>
      </ul>
      <span class="home__header__spacer"></span>
      <span class="home__header__searchText">Rechercher :</span>
      <input id="searchbar" type="text" placeholder="Sauveteurs, bateaux, ..." class="home__header__searchInput" v-model="input">
      <img src="../images/loupe.png" class="home__header__searchIcon">      
    </div>
    <div class="contain_resultat">
      <div class="resultat_recherche" v-for="r in search_results" v-bind:key="r">
              <Bateau v-if="r['type']=='bateau'"
              :title="r['data']['title']"
              :date="r['data']['date']"
              :personnes_sauves="r['data']['personnes_sauves']"
              />
      </div>
    </div>
    
</template>
<script>

import Bateau from '@/components/Bateau.vue'

export default{
    name: 'Header',
    components: {
        Bateau
    },
    data(){
        return{
            input:"",
            sauveteur:false,
            bateau:false,
            search_results:[
                {"type":"bateau",
                "data":{
                    "title":"Sauvetage du canot lamaneur GEORGES N\u00b016",
                    "date":"20 Septembre 1889",
                    "personnes_sauves":"Michel, Jean-Jean"
                    }
                },
                {"type":"bateau",
                "data":{
                    "title":"Sauvetage 10",
                    "date":"2 Juin 1456",
                    "personnes_sauves":"personnes LOL"
                    }
                },
            ]
        }
    },
    mounted() {
        function search(input){
            if (input.includes(" ") || input.length > 3){
                console.log(input)
            }
            
        }

        var searchbar = document.getElementById("searchbar")
        searchbar.addEventListener('input', () => {
               search(searchbar.value)
            });
    }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  font-family: 'BioRhyme', serif;
  background-color: rgb(250, 250, 250);

  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    color: white;
    background-color: navy;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    &__title {
      margin-left: 16px;
      font-size: 32px;
      font-weight: bold;
    }

    &__links {
      display: inline;
      margin-left: 32px;
      padding-left: 0px;
      font-size: 24px;
      list-style: none;

      li {
        cursor: pointer;
      }
    }

    &__spacer {
      flex: 1 1 auto;
    }

    &__searchText {
      margin-right: 8px;
      font-size: 24px;
    }

    &__searchInput {
      padding: 2px 0px 2px 4px;
      height: 30px;
      background-color: white;
      border: none;
      border-radius: 15px 0px 0px 15px;
    }

    &__searchIcon {
      margin-right: 16px;
      padding: 2px 4px 2px 4px;
      height: 30px;
      background-color: white;
      border-radius: 0px 15px 15px 0px;
      cursor: pointer;
    }
  } 
}
.contain_resultat{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
