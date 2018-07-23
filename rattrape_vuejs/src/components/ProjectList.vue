<template>     
      <div>
        <table>
          <tr></tr>
          <td>
        <ul id="projectList">                     
            <Project  v-for="project in allProjects" v-bind:key="project.id" :projectUnique="project"
            ></Project>          
        </ul>
        </td>
        </table>
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
      callOneProject : false
        }
      },
  }
</script>
