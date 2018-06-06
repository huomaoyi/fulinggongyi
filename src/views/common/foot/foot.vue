<style lang="less">
    @import './foot.less';
</style>

<template>
    <el-container class="foot">
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