<style lang="less">
    @import './fundraising.less';
</style>

<template>
    <div class="fundraising">
      <tlgy-header></tlgy-header>
        <el-container class="body">
          <el-main class="apptitle">
            <el-form ref="form"  label-width="150px">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio v-model="form.gender" label="1" class="moveleft movemiddle">男</el-radio>
                <el-radio v-model="form.gender" label="2" class="moveleft movemiddle">女</el-radio>
              </el-form-item>
              <el-form-item label="家庭住址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="form.id"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form.iphone"></el-input>
              </el-form-item>
              <el-form-item label="预期筹款金额">
                <el-input v-model="form.amount"></el-input>
              </el-form-item>
              <el-form-item label="预期筹款截止时间">
                <el-date-picker class="moveleft"
                    v-model="form.deadline"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="链克钱包地址">
                <el-input v-model="form.liankeaddress"></el-input>
              </el-form-item>
              <el-form-item label="活动名称">
                <el-input v-model="form.activityname"></el-input>
              </el-form-item>
              <el-form-item label="筹款原因">            
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.reason">
                </el-input>
              </el-form-item>
              <el-form-item label="相关图片">
                <el-input v-model="form.images"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button  @click="handleSubmit" type="warning" round>提交申请</el-button>
                <el-button  @click="gosuccess" type="success" round>申请成功</el-button>
                <el-button  @click="gofailed" type="danger" round>提交失败</el-button>
                <el-button  @click="goinfo" type="info" round>我的筹款</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      <tlgy-foot></tlgy-foot>
    </div>
</template>

<script>
import header from '../common/header/header.vue'
import foot from '../common/foot/foot.vue'

export default {
  data(){
    return{
       form: {
          name: '',
          gender: '',
          address: '',
          id: '',
          iphone: '',
          amount: '',
          deadline: '',
          reason: ''
        }
    }
  },
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
        handleSubmit () {
            this.$router.push({path: 'fundraisingsuccess'});
        },
         gofailed () {
            this.$router.push({path: 'fundraisingfailed'});            
        },
         gosuccess () {
            this.$router.push({path: 'fundraisingsuccess'});
        },
         goinfo () {
            //this.$router.push({path: 'fundraisingfailed'});
            this.$router.push({path: 'fundraisinginfo'});
        }
    }
}
</script>
