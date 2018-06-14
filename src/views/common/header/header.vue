<style lang="less">
    @import './header.less';
</style>

<template>
    <el-container class="header">
      <el-header class="movemiddle">
        <el-row :gutter="5">
          <el-col :span="3" class="moveleft"><span>{{appname}}</span></el-col>
          <el-col :span="12" class="moveleft" id="navigate">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">我要募款</el-menu-item>
            <el-menu-item index="2">我的筹款</el-menu-item>
            <el-menu-item index="3">我要捐款</el-menu-item>
            <el-menu-item index="4">我的捐款</el-menu-item>
          </el-menu>
          <div class="line"></div>
          </el-col>
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key == "1"){
          this.$router.push({path: 'fundraising'});
        }
        else if(key == "2"){
          this.$router.push({path: 'fundraisingcompelete'});
        }
        else if(key == "3"){
          this.$router.push({path: 'donornow'});
        }
        else if(key == "4"){
          this.$router.push({path: 'fundraisingcompelete'});
        }
      }
  }
 }
</script>