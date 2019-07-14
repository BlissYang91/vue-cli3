<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{url}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      url:process.env.VUE_APP_URL
    }
  }
}
</script>
