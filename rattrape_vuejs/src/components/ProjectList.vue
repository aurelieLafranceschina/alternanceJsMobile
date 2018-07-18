<template>     
      <div>
        {{message}}
        <ul id="projectList">                     
            <Project v-for="project in allProjects" v-bind:key="project._id" :projectUnique="project"
            ></Project>          
        </ul>
      </div>  
      
</template>

<script>
import  Project from "./Project.vue";
export default {
  name: 'ProjectList',
   components:{    
    'Project' : Project,
  },
  props: ["allProjects" , "message"],
  data () {
    return {      
      checkProject: 'Actif',
      uncheckedProject: 'Inactif',
        }
    }
  }
</script>

<style>
.active {
  background-color : #00cc44;
  border : solid 1px;
  
  
}
</style>