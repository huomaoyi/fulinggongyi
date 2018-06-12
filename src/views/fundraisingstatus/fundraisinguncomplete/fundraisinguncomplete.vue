<style lang="less">
    @import './fundraisinguncomplete.less';
</style>

<template>
    <div class="fundraisinguncomplete">
      <tlgy-header></tlgy-header>
        <el-container style="height:250px;">
            <el-header class="title">我的筹款</el-header>
            <el-main style="padding:0px; height:200px; margin:0 auto;">
                <el-container class="moveleft halfwidth panle" style="margin-right:10px;">
                    <el-aside class="halfwidth circle">
                        <el-progress type="circle" :percentage="78" color="gray"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth el-mainset">
                        <p>我的目标筹款金额：10</p>
                        <p>已捐款金额：7.8</p>
                        <p>剩余捐款金额：2.2</p>
                    </el-main>
                </el-container>
                <el-container class="halfwidth panle">
                    <el-aside class="halfwidth circle">
                        <el-progress type="circle" :percentage="0" color="yellow"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth el-mainset">
                      <p>计划截止时间：2018年6月11日</p>
                      <p>剩余天数：0天</p>
                    </el-main>
                </el-container>               
            </el-main>
        </el-container>
         <el-container class="refundraising" id="refundraising">
            <el-aside width="700px" class="refundraisingtitle">您的募捐截止时间已到，未能筹到目标金额，是否再次发起募捐？</el-aside>
            <el-aside width="120px" class="refundraisingbutton"><el-button  @click="gofundraising" type="warning" round>再次募捐</el-button></el-aside>
            <el-aside width="120px" class="refundraisingbutton"><el-button type="danger" @click="goapplyforusing" round>申请使用</el-button></el-aside>
         </el-container>
        <el-container>
            <el-header class="title">筹款记录</el-header>
            <el-main class="record">
                 <el-table :data="tableData2" style="width:100%;" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="时间" width="180"/>
                    <el-table-column  prop="name" label="捐款人" width="180"/>
                    <el-table-column prop="amount" label="捐款金额"/>
                </el-table>
            </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../../common/header/header.vue'
import foot from '../../common/foot/foot.vue'

export default {
    components: {
      'tlgy-header': header,
      'tlgy-foot': foot
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
       gofundraising(){
        this.$router.push({path: 'fundraising'});
      },
      goapplyforusing(){
        this.$router.push({path: 'applyforusing'});
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2018年4月15日  14:05',
          name: '林晨',
          amount: '2000元',
        }, {
          date: '2018年4月30日  15:27',
          name: '周厚发',
          amount: '2000元'
        }, {
          date: '2018年5月04日  09:27',
          name: '权力',
          amount: '2000元',
        }, {
          date: '2018年5月12日  10:27',
          name: '张金龙',
          amount: '2500元'
        }, {
          date: '2018年5月24日  09:27',
          name: '范梦洋',
          amount: '1500元'
        }, {
          date: '...',
          name: '...',
          amount: '...'
        }]
      }
    }
  }
</script>