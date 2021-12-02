<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
    <Header/>   
    <div>
      <h1>Test sauveteur</h1>
      <FicheTechniqueSauveteur/>
      <h1>Test bateaux</h1>
      <Bateau></Bateau>
      <Bateau></Bateau>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FicheTechniqueSauveteur from '../components/FicheTechniqueSauveteur.vue'
import Bateau from '@/components/Bateau.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    FicheTechniqueSauveteur,
    Bateau,
    Header
  }
}
</script>
<style lang="scss">

</style>
