<style lang="less">
    @import './fundraisinginfo.less';
</style>

<template>
    <div class="fundraisinginfo">
      <tlgy-header></tlgy-header>
        <el-container>
            <el-header class="title">我的筹款</el-header>
            <el-main>
                <el-container class="moveleft halfwidth">
                    <el-aside class="halfwidth">
                        <el-progress type="circle" :percentage="78" color="gray"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth">
                        <el-row :gutter="25"><el-tag>我的目标筹款金额:10万</el-tag></el-row>
                        <el-row :gutter="25"><el-tag>已捐款金额：7.8万</el-tag></el-row>
                        <el-row :gutter="25"><el-tag>剩余捐款金额：2.2万</el-tag></el-row>
                    </el-main>
                </el-container>
                <el-container class="halfwidth">
                    <el-aside class="halfwidth">
                        <el-progress type="circle" :percentage="80" color="yellow"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth">
                        <el-row :gutter="25"><el-tag>计划截止时间: 2018年6月15日</el-tag></el-row>
                        <el-row :gutter="25"><el-tag>剩余天数：25天</el-tag></el-row>
                    </el-main>
                </el-container>               
            </el-main>
        </el-container>
        <el-container>
            <el-header class="title record">筹款记录</el-header>
            <el-main>
                 <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
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
import header from '../common/header/header.vue'
import foot from '../common/foot/foot.vue'

export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
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
          amount: '2000元'
        }, {
          date: '2018年5月24日  09:27',
          name: '范梦洋',
          amount: '2000元'
        }, {
          date: '...',
          name: '...',
          amount: '...'
        }]
      }
    }
  }
</script>