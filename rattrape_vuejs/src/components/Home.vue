<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!-- <div >
        Projet 1
        <button v-bind:class ="{active : checked}">Projet Actif</button>
        <input type="checkbox" id="checkbox" v-model="checked" >
        <label for="checkbox">{{ checkProject }}</label>
      </div> -->
    <ProjectList :allProjects="projectList" 
             :message="msg">
    </ProjectList>
    
  </div>
</template>

<script>
import  ProjectList from "./ProjectList.vue";
export default {
  name: 'Home',
  components:{
    'ProjectList': ProjectList
  },
  data () {
    return {
      msg: 'Interface de gestion de projet',      
       projectList:
            [
                {
                "_id": "5b3e3da861f2d927949fa8da",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "name": "PUSHCART",
                "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
                },
                {
                "_id": "5b3e3da860e7c6eeb88e3ceb",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "name": "ZENTURY",
                "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
                },
                {
                "_id": "5b3e3da85d52b4482e60904a",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "name": "POLARAX",
                "creation": "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
                },
                {
                "_id": "5b3e3da830d91c6264ec2371",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "name": "BICOL",
                "creation": "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
                },
            ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
  background-color : #00cc44;
  border : solid 1px;
  
  
}
</style>
