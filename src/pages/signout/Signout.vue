<template>
  <div>
    <base-header title="退出">
      <router-link to="/home" slot="left">返回</router-link>
    </base-header>
    <div class="signout-content">
      <button @click="signout">确认退出</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseHeader from '@/components/BaseHeader'
export default {
  name: 'Signout',
  components: {
    BaseHeader
  },
  methods: {
    ...mapActions([
      'signOut'
    ]),
    signout () {
      this.$router.push({path: '/login'})
      this.signOut()
    }
  }
}
</script>

<style lang="less">
.signout-content {
  padding: 50px;
  text-align: center;
  button {
    padding: 5px 10px;
  }
}
</style>
