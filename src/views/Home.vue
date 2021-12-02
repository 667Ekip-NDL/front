<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Template par Heargo"/>
    <FicheTechniqueSauveteur/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FicheTechniqueSauveteur from '../components/FicheTechniqueSauveteur.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FicheTechniqueSauveteur
  }
}
</script>
<style lang="scss">
</style>
