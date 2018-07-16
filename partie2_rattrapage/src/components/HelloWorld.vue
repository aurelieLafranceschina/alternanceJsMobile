<template>
  <div id="app">
    <img src="./assets/coffee_logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{machines.name}}</h2>

    <toggle-button :value="false"
                   color="#82C7EB"
                   :sync="true"
                   :labels="true"/>


    <h2>Machine 2</h2>

    <toggle-button :value="false"
                   color="#82C7EB"
                   :sync="true"
                   :labels="true"/>


  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Machines à café',
                machines: [{
                    name:'Machine 1',
                    etat:'Machine 2'
                },
                    {
                        name:'Machine 1',
                        etat:'Machine 2'
                    }]
            }
        }
    }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>