<style lang="less">
    @import './failed.less';
</style>

<template>
    <div class="fundraisingfailed">
        <tlgy-header></tlgy-header>
        <el-container>
            <el-header>筹款申请结果</el-header>
            <el-main>
                <p class="highlight">对不起</p>
                <p>您的申请没有通过自动审核！!您补充完善申请。</p>
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
  }
}
</script>