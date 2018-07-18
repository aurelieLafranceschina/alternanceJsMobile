<template>     
      <div>
        {{message}}
        <ul id="projectList">
           <li  v-for="project in allProjects" v-bind:key="project._id">
              <div v-bind:class ="{active : project.isActive}">{{ project.name}}
                <input  type="checkbox" id="checkbox" v-model="project.isActive" >
                <label v-if="project.isActive" for="checkbox">{{ checkProject }}</label>
                <label v-else for="checkbox">{{ uncheckedProject }}</label>
             </div>
          </li>
        </ul>
      </div>  
      
</template>

<script>
export default {
  name: 'ProjectList',
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