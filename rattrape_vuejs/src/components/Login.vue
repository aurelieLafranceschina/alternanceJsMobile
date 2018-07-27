<template>
  <div v-if="logIn='ok'" class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button  class="btn btn-lg btn-primary btn-block" type="submit" @click="createUser()">Sign in</button>
    </form>
    <button  class="btn btn-lg btn-primary btn-block" type="submit" @click="getUser()">Test User</button>
    <div>Vous êtes connecté en tant que {{user.name}} </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errors:'',
      error: false,
      logIn:'',
      user:''
    }
  },

  
  methods: {

    updated () {
       
        if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || '/home')
    }
    },

    login () {
        let userMail = btoa(this.email + ":" + this.password)
        axios.post("https://daily-standup-campus.herokuapp.com/api/auth",{},
        {
           headers:
            {
               Authorization: "Basic " + userMail
            }
        }
        ).then(request => this.loginSuccessful(request))
    .catch(() => this.loginFailed())
    //     ) .then(response => {
      
    //     console.log(response);
    // })
    // .catch(e => {
    //     console.log('ERROR');
    //     this.errors.push(e)
    // });
      console.log(this.email)
      console.log(this.password)
    },

    loginSuccessful (req) {
        if (!req.data.token) {
            logIn="ok"
            this.loginFailed()
            return
    }

  localStorage.token = req.data.token
  this.error = false

  this.$router.replace(this.$route.query.redirect || '/home')
},

    loginFailed () {
    this.error = 'Login failed!'
    delete localStorage.token
    },

    createUser(){
       axios.post('https://daily-standup-campus.herokuapp.com/api/users/?access_token=masterKey',
       {
            email:this.email,
            password:this.password
          })
      .then(response => {
        // JSON responses are automatically parsed.
        // this.loading = !this.loading
        this.projectList = response.data
        console.log('requete terminée');
      })
      .catch(e => {
        console.log('ERROR');
        this.errors.push(e)
      });

    },

    getUser(){

      axios.get('https://daily-standup-campus.herokuapp.com/api/users/me?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
      .then(response => {
        // JSON responses are automatically parsed.
        // this.loading = !this.loading
        this.user = response.data
        console.log('requete terminée');
      })
      .catch(e => {
        console.log('ERROR');
        this.errors.push(e)
      });

    }

    
  }
}
</script>

<style lang="css">
body {
  
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>