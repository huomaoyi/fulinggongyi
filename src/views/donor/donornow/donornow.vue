<style lang="less">
    @import './donornow.less';
</style>

<template>
    <div class="donornow">
      <tlgy-header></tlgy-header>
      <el-container class="projectinfo">
        <el-header class="title">{{elements.project_text}}</el-header>
        <el-header class="split"></el-header>
        <el-main class="carouselelmain">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="project_info in project_infos" :key="project_info.project_address">
                <div class="projectdata">
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.project_description_text}}</div></el-col>
                    <el-col :span="21"><div class="grid-content bg-purple">{{project_info.project_description}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.amount_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.amount}} {{unit_type}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.creator_alice_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.creator_alice}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.creator_real_name_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.creator_real_name}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.creator_id_number_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.creator_id_number}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.creator_phone_number_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.creator_phone_number}}</div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple">{{elements.creator_home_address_text}}</div></el-col>
                    <el-col :span="10"><div class="grid-content bg-purple">{{project_info.creator_home_address}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.project_start_time_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.project_start_time}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.project_end_time_text}}</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple">{{project_info.project_end_time}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">{{elements.project_detail_text}}</div></el-col>
                    <el-col :span="21"><div class="grid-content bg-purple">{{project_info.project_detail}}</div></el-col>
                  </el-row>
                </div>
                <el-container>
                  <el-header class="donorpanle" :class="{'block': !project_info.is_fundrasing_finished, 'none': project_info.is_fundrasing_finished}">{{elements.left_time_text}}: {{project_info.left_time}}, {{elements.joined_count_text}}: {{project_info.joined_count}}, {{elements.need_amount_text}}: {{project_info.need_amount}} {{unit_type}}, {{elements.want_to_donor_text}}:
                    <el-input name="donor_amount_input" :tag="project_info.project_address"></el-input> {{unit_type}}&nbsp;&nbsp;
                    <el-button @click="donorAmount(project_info.project_address)" type="warning" round>{{elements.donor_now_button }}</el-button>
                  </el-header>
                  <el-header class="statuspanle" :class="{'block': project_info.is_fundrasing_finished, 'none': !project_info.is_fundrasing_finished}">{{elements.fundraiser_complite_text}} {{elements.complite_time_text}}: {{project_info.complite_time}}, {{elements.joined_count_text}}: {{project_info.joined_count}}, {{elements.total_receviced_amount_text}}: {{project_info.total_receviced_amount}} {{unit_type}}
                    &nbsp;&nbsp;&nbsp;<el-button @click="gotoProjectStageInfo(project_info.project_address)" type="warning" round>{{elements.stage_info_button }}</el-button>
                  </el-header>
                  <el-header class="title">{{elements.recored_text}}</el-header>
                  <el-main class="record">
                      <el-table :data="project_info.transfers" style="width:100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="time" label="时间" width="180" />
                        <el-table-column prop="user_name" label="捐款人" width="100" />
                        <el-table-column prop="userAddress" label="地址" width="400" />
                        <el-table-column prop="amount" label="金额"/>
                        <el-table-column prop="operation_text" label="操作"/>
                      </el-table>
                  </el-main>
                </el-container>
              </el-carousel-item>
            </el-carousel>
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
const strings = require("../../../libs/strings.js").strings.donornow;
const stringsenums = require("../../../libs/strings.js").strings.enums;
const settings = require("../../../libs/strings.js").strings.settings;

export default {
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    gotoProjectStageInfo(projectAddress) {
      this.$router.push({path: 'projectstageinfo', query: {project_address: projectAddress}});
    },
    donorAmount(projectAddress) {
      let input_amount = 0;
      let elements = document.getElementsByName("donor_amount_input");
      for(var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("tag") == projectAddress) {
            input_amount = elements[i].value || 0;
            break;
          }
      }

      if (input_amount > 0) {
        storage.addProjectTransfer({
        id: storage.getProjectTransferCount() + 1,
        projectAddress: projectAddress,
        userAddress: storage.getCurrentUserAddress(),
        amount: input_amount,
        time: new Date(),
        operation: 0
      });
      }
    }
  },
  data() {
    let project_infos = [];
    let projects = storage.getAllFundrasingProjects();
    
    projects.forEach(project => {
      let user = storage.getUserInfoByAddress(project.creator);
      let transfers = storage.getProjectTransfersInfoByProjectAddress(project.address);
      transfers.map(transfer => {
        transfer.user_name = storage.getUserInfoByAddress(transfer.userAddress).userName;
        transfer.operation_text = stringsenums.transfer_operation[transfer.operation];
      });

      let users = [];
      transfers.forEach(transfer => users.push(transfer.userAddress));
      let userCount = Array.from(new Set(users)).length;
      let receivedAmount = storage.getProjectTransferReceivedAmount(project.address);
      let donoramount = 0;
      
      project_infos.push({
        project_address: project.address,
        amount: project.amount,
        creator_alice: user.userName,
        creator_real_name: user.realName || "",
        creator_id_number: user.idNumber || "",
        creator_phone_number: user.phoneNumber || "",
        creator_home_address: user.homeAddress || "",
        project_start_time: project.startTime,
        project_end_time: project.endTime,
        project_detail: project.detail,
        project_description: project.description,
        left_time: new Date(project.endTime) < new Date ? "00:00:00:00" : tools.getTimeDistance(new Date(), project.endTime),
        joined_count: userCount,
        complite_time: tools.getTimeDistance(project.startTime, project.endTime),
        need_amount: project.amount - receivedAmount,
        total_receviced_amount: receivedAmount,
        is_fundrasing_finished: project.status === 2,
        transfers: transfers
      });
    });
    
    return {
      project_infos: project_infos,
      unit_type: settings.unit_type,
      elements: {
        amount_text: strings.amount_text,
        creator_alice_text: strings.creator_alice_text,
        creator_real_name_text: strings.creator_real_name_text,
        creator_id_number_text: strings.creator_id_number_text,
        creator_phone_number_text: strings.creator_phone_number_text,
        creator_home_address_text: strings.creator_home_address_text,
        project_start_time_text: strings.project_start_time_text,
        project_end_time_text: strings.project_end_time_text,
        project_detail_text: strings.project_detail_text,
        project_description_text: strings.project_description_text,
        project_text: strings.project_text,
        left_time_text: strings.left_time_text,
        joined_count_text: strings.joined_count_text,
        need_amount_text: strings.need_amount_text,
        recored_text: strings.recored_text,
        fundraiser_complite_text: strings.fundraiser_complite_text,
        complite_time_text: strings.complite_time_text,
        total_receviced_amount_text: strings.total_receviced_amount_text,
        stage_info_button: strings.stage_info_button,
        want_to_donor_text: strings.want_to_donor_text,
        donor_now_button: strings.donor_now_button
      }
    };
  }
}
</script>
