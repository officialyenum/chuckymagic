<template>
  <v-layout centered>
    <v-flex xs6 offset-xs3>
      <v-card white elevation-2>
        <h1 class="header">Register</h1>
        <div class="pad-all">
          <input class="magic-input" type="username" name="username" v-model="username" placeholder="username" />
          <br>
          <input class="magic-input"  type="email" name="email" v-model="email" placeholder="email" />
          <br>
          <input class="magic-input"  type="password" name="password" v-model="password" placeholder="password" />
          <br>
          <div class="error" v-html="error"/>
          <button class="my-btn"  type="submit" @click="register">Register</button>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
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
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: aqua;
  text-align: center;
  font-family:Helvetica;
  font-size: 32px;
  color: black;
}
.pad-b{
  padding-bottom: 20px;
}
.pad-all{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
}
.magic-input {
  border: 1px solid cyan;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  margin: 10px;
}

.my-btn {
  box-shadow: 2px 2px 2px 1px azure;
  text-align: center;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  background-color: cyan;
}
</style>
