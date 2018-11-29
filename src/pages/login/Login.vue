<template>
  <div>
    <base-header title="登录">
      <router-link slot="left" to="/">返回</router-link>
    </base-header>
    <form class="login-form" @submit.prevent="submitForm">
      <div class="form-group">
        <input
          type="text"
          placeholder="输入id"
          v-model="formData.id"
        >
        <div
          class="tips"
          v-show="isSubmit && !formData.id"
        >id不能为空</div>
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="输入用户名"
          v-model="formData.name"
        >
        <div
          class="tips"
          v-show="isSubmit && !formData.name"
        >用户名不能为空</div>
      </div>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import BaseHeader from '@/components/BaseHeader'
export default {
  name: 'login',
  components: {
    BaseHeader
  },
  data () {
    return {
      isSubmit: false,
      formData: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signIn'
    ]),
    submitForm () {
      this.isSubmit = true
      if (!this.formData.id || !this.formData.name) {
        return false
      }
      this.signIn(this.formData)
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="less">
.login-form {
  padding: 50px 0 0 0;
  text-align: center;
  .form-group {
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 20px;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      line-height: 28px;
      font-size: 14px;
    }
    span {
      display: block;
      width: 130px;
      margin: 0 auto;
      text-align: left;
      line-height: 20px;
      font-size: 12px;
      padding: 0 10px;
    }
    .tips {
      font-size: 12px;
      text-align: left;
      padding-left: 12px;
      line-height: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      color: #999
    }
  }
  button {
    padding: 0 20px;
    margin-top: 20px;
    line-height: 28px;
  }
}
</style>
