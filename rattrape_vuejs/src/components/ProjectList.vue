<template>     
      <div>
        <table>
          <tr><input class="form-control" type="text" v-model="search" placeholder="search"></tr>
          <tr><button @click="orderedProjects()">Trier par ordre alphabétique</button></tr>
          <td>
        <ul id="projectList">                     
            <Project  v-for="project in filteredProjects" v-bind:key="project.id" :projectUnique="project"
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
  props: ["allProjects" , "message" , "projectUnique"],
  data () {
    return {      
      checkProject: 'Actif',
      uncheckedProject: 'Inactif',
      callOneProject : false,
      projects:'',
      search:''
        }
      },
      computed:{
         filteredProjects: function () {
       return this.allProjects.filter(projet => {
         return projet.name.match(this.search);
       });
     }


      },
      methods: {
        orderedProjects() {
         return this.allProjects.sort((a, b) => a.name > b.name);
        }
      
    } 

      
  }
</script>
