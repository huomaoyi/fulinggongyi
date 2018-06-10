<style lang="less">
    @import './fundraisingusinginfo.less';
</style>

<template>
    <div class="fundraisingusinginfo">
      <tlgy-header></tlgy-header>
        <el-container>
            <el-header class="title">费用使用情况</el-header>
            <el-main class="panle">
                <el-container>
                    <el-aside class="halfwidth">
                        <el-progress type="circle" :percentage="34" color="green"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth el-mainset">
                      <p>已申请次数:5次</p>
                      <p>已成功申请金额：6.6</p>
                      <p>剩余募款金额：23.4</p>
                    </el-main>
                </el-container>             
            </el-main>
        </el-container>
        <el-container>
            <el-main class="el-mainset">
                 <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="时间" width="180"/>
                    <el-table-column  prop="applyamount" label="申请金额" width="180"/>
                    <el-table-column prop="leftamount" label="剩余金额"/>
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
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2018年5月18日  14:05',
          applyamount: '2',
          leftamount: '8',
        }, {
          date: '2018年5月19日  15:27',
          applyamount: '1',
          leftamount: '7'
        }, {
          date: '...',
          applyamount: '...',
          leftamount: '...'
        }]
      }
    }
  }
</script>