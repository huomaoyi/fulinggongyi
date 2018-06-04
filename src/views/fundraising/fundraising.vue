<template lang="html">
    <div class="fundraising">
      <tlgy-header></tlgy-header>
      <tlgy-body></tlgy-body>
    </div>
</template>

<script>
import header from './tlgy/header/header.vue'
import body from './tlgy/body/body.vue'

export default {
  components: {
    'tlgy-header': header,
    'tlgy-body': body
  }
}
</script>
