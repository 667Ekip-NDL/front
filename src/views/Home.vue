<template>
  <div class="home">
    <Header/>   
    <div class="home__content">
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
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(250, 250, 250);
  
  &__content {

    &__bienvenue {
      position: relative;
      width: 100%;
      height: 700px;
      border-bottom: solid 5px navy;

      &__imageAccueil {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: url(../images/dunkerque.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(3px);
      }

      &__texteAccueil {
        position: absolute;
        z-index: 1;
        top: 80px;
        left: 100px;
        margin: 0px;
        padding: 16px;
        width: 60%;
        color: white;
        font-size: 36px;
        font-weight: bold;
        text-align: justify;
        background-color: rgba(0, 0, 0, 0.5);
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
    }
  }
}
</style>
