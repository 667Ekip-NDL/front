<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
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

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    FicheTechniqueSauveteur,
    Bateau
  }
}
</script>
<style lang="scss">

.home{


  h1 {
    color: navy;
  }
}

</style>
