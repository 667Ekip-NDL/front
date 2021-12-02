<template>
  <div class="home">
    <Header/>   
    <div class="home__content">
      <div class="home__content__bienvenue">
        <div class="home__content__bienvenue__imageAccueil"></div>
        <h2 class="home__content__bienvenue__texteAccueil">
          Bienvenue sur le site des sauveteurs du dunkerquois.
          <br><br>
          Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.
          <br><br>
          Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), 
          ont participé à plus de 900 sauvetages en mer et plus de 1100 sauvetages individuels.
          <br><br>
          Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés. 
        </h2>
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
    border-bottom: solid 5px navy;

    &__bienvenue {
      position: relative;
      width: 100%;
      height: 700px;

      &__imageAccueil {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: url(../images/dunkerque.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px);
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
  }
}
</style>
