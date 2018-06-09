<style lang="less">
    @import './header.less';
</style>

<template>
    <el-container class="header">
      <el-header class="movemiddle">
        <el-row :gutter="5">
          <el-col :span="3" class="moveleft"><span>{{appname}}</span></el-col>
          <el-col :span="2" class="moveright movemiddle username">feiniao</el-col>
          <el-col :span="1" class="moveright"><img src="../../../assets/avator.png" class="avator moveright"/></el-col>
          <el-col :span="1" class="moveright"><i class="el-icon-bell movemiddle tlgyicon moveright"></i></el-col>
          <el-col :span="1" class="moveright"><i class="el-icon-search movemiddle tlgyicon"></i></el-col>
      </el-row>
      <!--
        <span class="apptitle moveleft">{{appname}}</span>
        <span class="moveright"><i class="el-icon-bell movemiddle tlgyicon"></i></span>
        <span class="moveright"><i class="el-icon-search movemiddle tlgyicon"></i></span>
        <span class="moveright"><img src="../../../assets/avator.png" class="avator"/></span>
        -->
      </el-header>
      
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