<template>
  <div>
    <base-header title="首页">
      <router-link
        slot="right"
        v-if="user.id"
        :to="{name: 'home'}"
      >{{user.name}}</router-link>
    </base-header>
    <div class="login-msg" v-if="!user.id">
      <router-link
        :to="{name: 'login'}"
      >您还未登录，请先登录</router-link>
    </div>
    <div class="content-msg" v-if="user.id">
      哈哈，恭喜你已经入坑！
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseHeader from '@/components/BaseHeader'
export default {
  name: 'Index',
  components: {
    BaseHeader
  },
  computed: mapState([
    'user'
  ])
}
</script>

<style lang="less">
.login-msg,
.content-msg {
  padding: 50px;
  text-align: center;
}
</style>
