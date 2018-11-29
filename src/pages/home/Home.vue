<template>
  <div>
    <base-header title="首页">
      <router-link
        slot="left"
        to="/"
      >首页</router-link>
      <router-link
        slot="right"
        to="/signout"
      >退出</router-link>
    </base-header>
    <div class="home-content">
      {{user.name}} 欢迎回家
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseHeader from '@/components/BaseHeader'
export default {
  name: 'Home',
  components: {
    BaseHeader
  },
  computed: {
    ...mapState([
      'user'
    ])
  }
}
</script>

<style>
.home-content {
  padding: 50px;
  text-align: center;
}
</style>
