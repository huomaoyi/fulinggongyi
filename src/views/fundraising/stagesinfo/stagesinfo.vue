<style lang="less">
    @import './stagesinfo.less';
</style>

<template>
    <div class="stagesinfo">
      <tlgy-header></tlgy-header>
        <el-container>
            <el-header class="title">{{elements.title_label}}</el-header>
            <el-row class="progress">
              <el-col :span="6"><div class="grid-content bg-purple">{{elements.stage_progree}} ({{agreeCount}}/{{votorCount}})</div></el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-progress class="elprogress" :text-inside="true" :stroke-width="20" :percentage="progress"></el-progress>
                </div>
                </el-col>
            </el-row>
        </el-container>         
        <el-container>
            <el-header class="title">筹款记录</el-header>
            <el-main class="record">
                 <el-table :data="stageTable" style="width:100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="index" label="阶段" />
                    <el-table-column prop="title" label="标题" />
                    <el-table-column prop="amount" label="金额"/>
                    <el-table-column prop="startTime" label="开始时间"/>
                    <el-table-column prop="endTime" label="结束时间"/>
                    <el-table-column prop="status_text" label="状态"/>
                </el-table>
            </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../../common/header/header.vue';
import foot from '../../common/foot/foot.vue';

const storage = require("../../../libs/storage.js");
const tools = require("../../../libs/tools.js");
const strings = require("../../../libs/strings.js").strings.stagesinfo;
const stringsenums = require("../../../libs/strings.js").strings.enums;


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
      let project = storage.getProjectInfoByCreateAddress(storage.getCurrentUserAddress());
      let stages = storage.getStagesInfoByProjectAddress(project.address);
      stages.map(stage => stage.status_text = stringsenums.stage_status[stage.status]);

      let votes = storage.getStageVotesInfo(project.address, stages[stages.length - 1].index);
      let agreeCount = 0;
      votes.map(vote => vote.operation === 1 ? agreeCount++ : agreeCount + 0);      

      return {
        agreeCount: agreeCount,
        votorCount: votes.length,
        progress: Math.round((agreeCount / votes.length) * 100),
        stageTable: stages,
        elements: {
          title_label: strings.title_label,
          stage_progree: strings.stage_progree
        }
      };
    }
  }
</script>