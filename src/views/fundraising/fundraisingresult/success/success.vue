<style lang="less">
    @import './success.less';
</style>

<template>
    <div class="fundraisingsuccess">
        <tlgy-header></tlgy-header>
        <el-container>
            <el-header>筹款申请结果</el-header>
            <el-main>
                <p class="highlight">恭喜您</p>
                <p>您已经具备筹款条件，请您仔细阅读筹款合约。并保存您的收款地址和密码。</p>
                <el-button @click="goapplyforusing" type="success">发起使用申请</el-button>
            </el-main>
        </el-container>
        <tlgy-foot></tlgy-foot>
    </div>
</template>
<script>
import header from '../../../common/header/header.vue'
import foot from '../../../common/foot/foot.vue'

export default {
  components: {
    'tlgy-header': header,
    'tlgy-foot': foot
  },
   methods: {
        goapplyforusing () {
            this.$router.push({path: 'applyforusing'});
        }
    }
}
</script>