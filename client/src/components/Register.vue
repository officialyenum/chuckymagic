<template>
  <div>
    <h1 class="header">Register</h1>
    <input type="username" name="username" v-model="username" placeholder="username" />
    <br>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br>
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br>
    <div class="error" v-html="error"/>
    <button type="submit" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  padding: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 10px;
  color: red;
  size: 5px;
}
.header {
  text-align: center;
  font: 100;
  font-family:fantasy;
  font-size: 32px;
  color: aqua;
}
</style>
