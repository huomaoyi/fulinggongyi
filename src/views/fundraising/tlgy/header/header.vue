<style lang="less">
    @import './header.less';
</style>

<template>
    <el-container class="header">
      <el-header class="apptitle">{{appname}}</el-header>
    </el-container>
</template>

<script type="text/javascript">
 export default{
  data(){
    return{
      appname : this.$store.state.appname
    }
  }
 }
</script>