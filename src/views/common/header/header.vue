<style lang="less">
    @import './header.less';
</style>

<template>
    <el-container class="header">
      <el-header class="movemiddle">
        <el-row :gutter="5">
          <el-col :span="19"><el-button @click="gotologin" type="text" class="apptitle">{{appname}}</el-button></el-col>
          <el-col :span="2" class="moveright movemiddle username">feiniao</el-col>
          <el-col :span="1" class="moveright"><img src="../../../assets/avator.png" class="avator moveright"/></el-col>
          <el-col :span="1" class="moveright"><i class="el-icon-bell movemiddle tlgyicon moveright"></i></el-col>
          <el-col :span="1" class="moveright"><i class="el-icon-search movemiddle tlgyicon"></i></el-col>
      </el-row>
      </el-header>
    </el-container>
</template>

<script type="text/javascript">
 export default{
  data(){
    return{
      appname : this.$store.state.appname,
      activeIndex: '1'
    }
  },
  methods: {
      gotologin() {
        this.$router.push({path: 'login'});
      }
  }
 }
</script>