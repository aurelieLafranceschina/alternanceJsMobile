<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div >
        Projet 1
        <button v-bind:class ="{active : checked}">Projet Actif</button>
        <input type="checkbox" id="checkbox" v-model="checked" >
        <label for="checkbox">{{ checkProject }}</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Interface de gestion de projet',
      checked: false,
      checkProject: 'Activer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.active {
  background-color : green;
}
</style>
