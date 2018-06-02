<style lang="less">
    @import './home.less';
</style>

<template>
  <div class="home">{{ msg }}

    <router-link to="/Login"> login</router-link>
  </div>
  <!--<router-link to="/Login">login</router-link> -->
</template>

<script>
//import Login from '../../views/login/login'


export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
