<template>
  <div class="home">
    <img alt="Strazo logo" src="../assets/Strazo.png" class="mainimg">
    <HelloWorld msg="Welcome!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.mainimg {
  width:250px;
}
</style>
