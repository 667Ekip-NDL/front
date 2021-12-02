<template>
  <div class="main">
    <!--<Nav/>-->
    <div class="main__header">
      <span class="main__header__title">Sauveteurs du dunkerquois</span>
      <ul class="main__header__links">
        <li>Accueil</li>
      </ul>
      <span class="main__header__spacer"></span>
      <span class="main__header__searchText">Rechercher :</span>
      <input type="text" placeholder="Sauveteurs, bateaux, ..." class="main__header__searchInput">
      <img src="../src/images/loupe.png" class="main__header__searchIcon">      
    </div>
    <router-view/>
  </div>
</template>


<script>
//import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    //Nav
  }
}
</script>

<style lang="scss">
/*:-moz-submit-invalid#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}*/
.main {
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
      padding: 2px;
      height: 30px;
      background-color: white;
      border: none;
    }

    &__searchIcon {
      margin-right: 16px;
      padding: 2px;
      height: 30px;
      background-color: white;
      cursor: pointer;
    }
  }
}
</style>
