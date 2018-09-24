<style lang="less">
    @import './fundraisinginfo.less';
</style>

<template>
    <div class="fundraisinginfo">
      <tlgy-header></tlgy-header>
        <el-container style="height:250px;">
            <el-header class="title">{{elements.title_label}}
              <el-button  :class="{'block': applyForUseSuccessful, 'none': !applyForUseSuccessful}" class="gotostageinfo" @click="gotoStagesInfo" type="warning" round>{{elements.stage_info_button}} ></el-button>
            </el-header>
            <el-main style="padding:0px; height:200px; margin:0 auto;">
                <el-container class="moveleft halfwidth panle" style="margin-right:10px;">
                    <el-aside class="halfwidth circle">
                        <el-progress type="circle" :percentage="amountProgess"  color="gray"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth el-mainset">
                        <p>{{elements.target_amount_text}}: {{fundraisingInfo.targetAmount}}</p>
                        <p>{{elements.received_amount_text}}: {{fundraisingInfo.receivedAmount}}</p>
                        <p>{{elements.need_amount_text}}: {{fundraisingInfo.needAmount}}</p>
                    </el-main>
                </el-container>
                <el-container class="halfwidth panle">
                    <el-aside class="halfwidth circle">
                        <el-progress type="circle" :percentage="timeProgess" color="yellow"></el-progress>
                    </el-aside>
                    <el-main class="halfwidth el-mainset">
                      <p>{{elements.endtime_text}}: {{fundraisingInfo.endTime}}</p>
                      <p>{{elements.leftdays_text}}: {{fundraisingInfo.leftTime}}</p>
                      <p>{{elements.status_text}}: {{fundraisingInfo.status}}</p>
                    </el-main>
                </el-container>               
            </el-main>
        </el-container>
        <el-container>
            <el-header class="title applyforusetext" :class="{'block': applyForUseSuccessful, 'none': !applyForUseSuccessful}">{{elements.apply_for_use_text}}
              <el-button @click="gotoApplyForUsing" type="warning" round>{{elements.apply_for_use_button}}</el-button>
            </el-header>
            <el-header class="title applyforusetext" :class="{'block': applyForUseFailed, 'none': !applyForUseFailed}">{{elements.fundraising_failed_text}}</el-header>
        </el-container>
        <el-container>
            <el-header class="title">{{elements.record_table_label}}</el-header>
            <el-main class="record">
                 <el-table :data="tableData" :row-class-name="tableRowClassName">
                    <el-table-column prop="time" label="时间" width="180"/>
                    <el-table-column prop="userName" label="捐款人" width="100"/>
                    <el-table-column prop="userAddress" label="地址" width="400"/>
                    <el-table-column prop="amount" label="捐款金额"/>
                    <el-table-column prop="operation" label="操作"/>
                </el-table>
            </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../../common/header/header.vue'
import foot from '../../common/foot/foot.vue'

const storage = require("../../../libs/storage.js");
const tools = require("../../../libs/tools.js");
const strings = require("../../../libs/strings.js").strings.fundraisingInfo;
const stringspro = require("../../../libs/strings.js").strings;

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
      gotoStagesInfo () {
          this.$router.push({path: 'stagesinfo'});
      },
      gotoApplyForUsing () {
          this.$router.push({path: 'applyforusing'});
      }
    },
    data() {
      let project = storage.getProjectInfoByCreateAddress(storage.getCurrentUserAddress());
      let receivedSum = storage.getProjectTransferReceivedAmount(project.address);
      let amountProgess = receivedSum / project.amount * 100;
      let leftTime = new Date().getTime() < new Date(project.endTime).getTime() ? tools.getTimeDistance(project.startTime, project.endTime) : "00:00:00:00"
      let timeProgess = leftTime == "00:00:00:00" ? 0 : 
                                    Math.round((1 - (new Date().getTime() - new Date(project.startTime).getTime()) / (new Date(project.endTime).getTime() - new Date(project.startTime).getTime())) * 100);

      let fundraisingInfo = {
        targetAmount: project.amount,
        receivedAmount: receivedSum,
        needAmount: project.amount - receivedSum,
        endTime: project.endTime,
        leftTime: leftTime,
        status: stringspro.enums.project_status[project.status]
      };

      let transfers = storage.getProjectTransfersInfoByProjectAddress(project.address);
      let applyforusesuccessful = false;
      let applyforusefailed = false;
      
      if (project.status == 1 && transfers.length == 0){
        applyforusesuccessful = false;
        applyforusefailed = true;
      }
      else if (project.status == 1 && transfers.length > 0) {
        applyforusesuccessful = true;
        applyforusefailed = false;
      }
      else if (project.status == 2 && transfers.length == 0) {
        applyforusesuccessful = false;
        applyforusefailed = true;
      }
      else if (project.status == 2 && transfers.length > 0) {
        applyforusesuccessful = false;
        applyforusefailed = false;
      }

      let transferInfos = [];
      transfers.forEach(transfer => {
        transferInfos.push({
          time: transfer.time,
          userName: storage.getUserInfoByAddress(transfer.userAddress).userName,
          userAddress: transfer.userAddress,
          amount: transfer.operation === 0 ? transfer.amount : -transfer.amount,
          operation: stringspro.enums.transfer_operation[transfer.operation]
        });
      });

      return {
        fundraisingInfo : fundraisingInfo,
        amountProgess: amountProgess,
        timeProgess: timeProgess,
        tableData: transferInfos,
        applyForUseSuccessful: applyforusesuccessful,
        applyForUseFailed: applyforusefailed,
        elements: {
          title_label: strings.title_label,
          stage_info_button: strings.stage_info_button,
          target_amount_text: strings.target_amount_text,
          received_amount_text: strings.received_amount_text,
          need_amount_text: strings.need_amount_text,
          endtime_text: strings.endtime_text,
          leftdays_text: strings.leftdays_text,
          status_text: strings.status_text,
          record_table_label: strings.record_table_label,
          apply_for_use_text: strings.apply_for_use_text,
          apply_for_use_button: strings.apply_for_use_button,
          fundraising_failed_text: strings.fundraising_failed_text,
        }
      }
    }
  }
</script>