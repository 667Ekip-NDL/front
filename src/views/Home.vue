<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
    <div>
      <h1>test bateau</h1>
      <Bateau></Bateau>
      <Bateau></Bateau>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Bateau from '@/components/Bateau.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Bateau
  }
}
</script>
<style lang="scss">
</style>
