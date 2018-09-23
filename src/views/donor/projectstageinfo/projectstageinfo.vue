<style lang="less">
    @import './projectstageinfo.less';
</style>

<template>
    <div class="projectstageinfo">
      <tlgy-header></tlgy-header>
      <el-container>
        <el-header class="title">{{elements.title_label}}</el-header>
        <el-header class="project_description">{{project_description}} ({{elements.joined_count_text}}: {{joined_count}}, {{elements.left_time_text}}: {{left_time}})</el-header>
        <el-main>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item  v-for="stage in stages" :key="stage.index" :title="stage.title_text" :name="stage.index">
              <el-row>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{elements.stage_title_text}}</div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple-light">{{stage.title}}</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{elements.stage_amount_text}}</div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple-light">{{stage.amount}} {{unit_type}}</div></el-col>
              </el-row>
               <el-row>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{elements.stage_start_time_text}}</div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple-light">{{stage.startTime}}</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{elements.stage_end_time_text}}</div></el-col>
                <el-col :span="9"><div class="grid-content bg-purple-light">{{stage.endTime}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="3"><div class="grid-content bg-purple-light">{{elements.stage_description_text}}</div></el-col>
                <el-col :span="21"><div class="grid-content bg-purple-light">{{stage.description}}</div></el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                      {{elements.need_amount_text}}: {{0}} {{unit_type}}, 
                      {{elements.user_left_amount_text}}: {{0}} {{unit_type}}, 
                      {{elements.agreed_count_text}}: {{1}}/{{10}}, 
                      {{elements.user_can_text}}
                      <el-button  @click="voteStage(stage.id, 1)" type="success">{{elements.agree_button}}</el-button> 
                      <el-button  @click="voteStage(stage.id, 2)" type="danger">{{elements.refuse_button}}</el-button> 
                      {{elements.stage_vote_text}}
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="grid-content bg-purple">
                      {{elements.need_amount_text}}: {{0}} {{unit_type}}, 
                      {{elements.user_left_amount_text}}: {{0}} {{unit_type}}, 
                      {{elements.user_choose_text}}: {{elements.agree_button}}, 
                      {{elements.agreed_count_text}}: {{1}}/{{10}}, 
                      {{elements.thanks_text}}
                    </div>
                  </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-main>
        <el-footer class="withdraw">{{elements.withdraw_text}}
          <el-button  @click="createWithdraw()" type="danger">{{elements.create_withdraw_text}}</el-button>
        </el-footer>
        <el-footer class="withdraw">{{elements.after_withdraw_text}}: {{10}} {{unit_type}}, {{elements.sorry_text}}</el-footer>
      </el-container>     
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../../common/header/header.vue'
import foot from '../../common/foot/foot.vue'

const storage = require("../../../libs/storage.js");
const tools = require("../../../libs/tools.js");
const strings = require("../../../libs/strings.js").strings.projectstageinfo;
const stringsenums = require("../../../libs/strings.js").strings.enums;
const settings = require("../../../libs/strings.js").strings.settings;

export default {
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
  methods: {
    voteStage(stageId, operation) {
      storage.addVote({
        id: storage.getVoteTotalCount() + 1,
        stageId: stageId,
        projectAddress: this.$route.query.project_address,
        userAddress: storage.getCurrentUserAddress,
        time: new Date,
        operation: operation
      });
    },
    createWithdraw() {
      storage.addProjectTransfer({
        id: storage.getProjectTransferCount() + 1,
        projectAddress: this.$route.query.project_address,
        userAddress: storage.getCurrentUserAddress,
        amount: 9999,
        time: new Date,
        operation: 1
      });
    }
  },
  data() {
    let projectAddress = this.$route.query.project_address;
    let project = storage.getProjectInfoByProjectAddress(projectAddress); 
    let stages = storage.getStagesInfoByProjectAddress(projectAddress);
    stages.map(stage => stage.title_text = strings.stage_text + stage.index + ":" + stage.title);

    let users = [];
    let transfers = storage.getProjectTransfersInfoByProjectAddress(project.address).forEach(transfer => users.push(transfer.userAddress));
    let userCount = Array.from(new Set(users)).length;
    
    return {
      project_description: project.description,
      joined_count: userCount,
      left_time: new Date(project.endTime) < new Date ? "00:00:00:00" : tools.getTimeDistance(new Date(), project.endTime),
      activeName: 1,
      stages: stages,
      unit_type: settings.unit_type,
      elements: {
        title_label: strings.title_label,
        left_time_text: strings.left_time_text,
        joined_count_text: strings.joined_count_text,
        stage_title_text: strings.stage_title_text,
        stage_amount_text: strings.stage_amount_text,
        stage_description_text: strings.stage_description_text,
        stage_start_time_text: strings.stage_start_time_text,
        stage_end_time_text: strings.stage_end_time_text,
        need_amount_text: strings.need_amount_text,
        user_left_amount_text: strings.user_left_amount_text,
        agreed_count_text: strings.agreed_count_text,
        user_can_text: strings.user_can_text,
        agree_button: strings.agree_button,
        refuse_button: strings.refuse_button,
        stage_vote_text: strings.stage_vote_text,
        user_choose_text: strings.user_choose_text,
        thanks_text: strings.thanks_text,
        withdraw_text: strings.withdraw_text,
        create_withdraw_text: strings.create_withdraw_text,
        after_withdraw_text: strings.after_withdraw_text,
        sorry_text: strings.sorry_text
      }
    };
  }
}
</script>
