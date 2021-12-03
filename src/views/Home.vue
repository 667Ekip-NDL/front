<template>
  <div class="home">
    <Header/>  
    <div v-show="!searched" class="home__content">
      <div class="home__content__bienvenue">
        <div class="home__content__bienvenue__imageAccueil"></div>
        <p class="home__content__bienvenue__texteAccueil">
          Bienvenue sur le site des sauveteurs du dunkerquois.
          <br><br>
          Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.
          <br><br>
          Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), 
          ont participé à plus de 900 sauvetages en mer et plus de 1100 sauvetages individuels.
          <br><br>
          Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés. 
        </p>
      </div>
        
      <div class="home__content__presentation">
        <p class="home__content__presentation__texte">
          La citation ci-dessous, signée <a href="https://sauveteurdudunkerquois.fr/bosa-0257h/">Arsène Bossu</a>, 
          à un journaliste du Grand Echo du Nord de la France en 1932, 
          résume à elle seule l’état d’esprit des sauveteurs du Dunkerquois.
        </p>

        <p class="home__content__presentation__citation">
          <span class="home__content__presentation__citation__guillemet">"</span>
          Les sauvetages? Mais tout le monde en fait …
          Si un homme tombe dans la « Baille »
          est ce qu’on ne va pas le chercher?
          Il n’y a à cela aucun mérite…
          <span class="home__content__presentation__citation__guillemet">"</span>
        </p>

        <div class="home__content__presentation__articles">
          <a href="https://sauveteurdudunkerquois.fr/85gol-0059b/" class="home__content__presentation__articles__card">
            <img src="../images/journalDeBord.png" class="home__content__presentation__articles__card__image">
            <span class="home__content__presentation__articles__card__texte">1905 CAP-HORN sauvetage GARDSALE</span>
          </a>

          <a href="https://sauveteurdudunkerquois.fr/05gar-0402b/" class="home__content__presentation__articles__card">
            <img src="../images/dossierSemaine.png" class="home__content__presentation__articles__card__image">
            <span class="home__content__presentation__articles__card__texte">Il y a 136 ans sauvetage de la goélette anglaise GOLDEN SHEAF</span>
          </a>
        </div>
        
        <h1 class="home__content__presentation__titreSNSM">
          Nos amis de la SNSM - <span class="home__content__presentation__titreSNSM--smallerItalic">Dunkerque</span>
        </h1>

        <div class="home__content__presentation__imageSNSMDiv">
          <img src="../images/interview-le-daguenel.jpg" class="home__content__presentation__imageSNSMDiv__image">
        </div>
        
      </div>
    </div>
  <!--LOADER-->
  
    <div class="loader" v-show="searched && !searchedDone">
      <img  src="@/assets/load.gif" alt="thomas pesquet">
    </div>
  <!--cards-->
  <div v-show="searched && research_response!={}">
    <div class="contain_resultat">
        <div v-for="r in research_response" v-bind:key="r">
            <Bateau v-if="r['type']=='sauvetage'"
            :title="r['title']"
            :date="r['date']"
            :personnes_sauves="r['saved']"
            :participants="r['participants']"
            />
            <FicheTechniqueSauveteur v-if="r['type']=='personne'"
            :nom_sauveteur="r['nom']"
            :prenom_sauveteur="r['prenom']"
            :personnes_sauves="r['saved']"
            />
        </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Bateau from '@/components/Bateau.vue'
import FicheTechniqueSauveteur from '@/components/FicheTechniqueSauveteur.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,Bateau,FicheTechniqueSauveteur
  },
  computed: {
        ...mapState(['research_response','searched','searchedDone'])
    }
}
</script>

<style lang="scss">
.contain_resultat{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
.loader{
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: calc(100vh - 64px);
  img{
    border-radius: 100%;
  }
}
.home {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(250, 250, 250);
  
  &__content {

    &__bienvenue {
      position: relative;
      width: 100%;
      height: calc(100vh - 64px - 5px); 
      border-bottom: solid 5px navy;

      &__imageAccueil {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: url(../images/bateau_sauvetage.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(3px);
      }

      &__texteAccueil {
        position: absolute;
        z-index: 1;
        top: 175px;
        left: 10%;
        margin: 0px;
        padding: 16px;
        width: 80%;
        height: auto;
        max-height: 540px;
        color: white;
        font-size: 36px;
        font-weight: bold;
        text-align: justify;
        background-color: rgba(0, 0, 0, 0.7);
        border: solid 3px white;
        box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
      }
    }

    &__presentation {
      margin: 0px 10% 0px 10%;
      padding: 32px 32px 8px 32px;
      width: 80%;
      text-align: justify;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

      &__texte {
        margin: 0;
        font-size: 24px;
      }

      &__citation {
        color: rgb(128, 128, 128);
        font-size: 35px;

        &__guillemet {
          color: orange;
          font-size: 70px;
          font-weight: bolder;
        }
      }

      &__articles {
        display: flex;
        justify-content: space-evenly;
        margin: 32px 0px 32px 0px;
        width: 100%;
        height: auto;

        &__card {
          position: relative;
          width: 400px;
          height: 300px;
          text-decoration: none;
          border: solid 1px black;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

          &:visited {
            text-decoration-color: none;
            color: navy;
          }

          &__image {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          &__texte {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            color: navy;
            background-color: white;
            border-top: solid 2px navy;
          }
        }
      }

      &__titreSNSM {
        margin: 64px 0px 0px 16px;
        color: navy;
        font-size: 35px;
        font-weight: bold;

        &--smallerItalic {
          font-size: 30px;
          font-weight: lighter;
          font-style: italic;
        }
      }

      &__imageSNSMDiv {
        display: flex;
        justify-content: center;
        margin: 16px 0px 16px 0px;
        width: 100%;

        &__image {
          border: solid 1px navy;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>
