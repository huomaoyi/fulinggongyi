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
              <el-carousel-item v-for="item in 1" :key="item">
                <el-row>
                  <el-col :span="12"><div class="grid-content bg-purple">adas</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">adsa</div></el-col>
                </el-row>
                <el-container>
                  <el-header class="statuspanle">{{elements.left_time_text}}: {{1}}, {{elements.joined_count_text}}: {{1}}, {{elements.need_amount_text}}: {{1}}</el-header>
                  <el-header class="title">{{elements.recored_text}}</el-header>
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
      }
  },
  data() {
    let project = storage.getProjectInfoByCreateAddress(storage.getCurrentUserAddress());
    let stages = storage.getStagesInfoByProjectAddress(project.address);
    stages.map(stage => stage.status_text = stringsenums.stage_status[stage.status]);
    
    return {
      stageTable: stages,
      elements: {
        project_text: strings.project_text,
        left_time_text: strings.left_time_text,
        joined_count_text: strings.joined_count_text,
        need_amount_text: strings.need_amount_text,
        recored_text: strings.recored_text
      }
    };
  }
}
</script>
