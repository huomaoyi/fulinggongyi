<style lang="less">
    @import './foot.less';
</style>

<template>
    <el-container class="foot">
      <el-main class="copyright">
        <p class="copyrightcontent">帮助&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隐私&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;条款</p>
        <p class="copyrightcontent">Copyright
          <img src="../../../assets/copyright.png" class="copyrightimage"/>
          2018 飞鸟团队
        </p>
        </el-main>
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