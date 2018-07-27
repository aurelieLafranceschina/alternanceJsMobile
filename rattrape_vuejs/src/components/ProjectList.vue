<template>     
      <div>
        <table>
          <tr><input class="form-control" type="text" v-model="search" placeholder="search"></tr>
          <tr><button @click="createProject()" type="button" class="btn btn-success">Créer un nouveau projet</button></tr>
          <tr><button @click="orderedProjects()">Trier par ordre alphabétique</button></tr>
          <tr><button class="btn btn-danger" @click="shuffle()">Mélanger les projets</button></tr>
          <td>
        <ul id="projectList">     
           <transition-group name="flip-list" tag="ul">                
            <Project  v-for="project in filteredProjects" v-bind:key="project.id" :projectUnique="project"
            ></Project>          
            </transition-group>
        </ul>
        </td>
        
        </table>
      </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
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

         shuffle: function () {
      this.allProjects = _.shuffle(this.allProjects)
     },


        orderedProjects() {
         return this.allProjects.sort((a, b) => a.name > b.name);
        },

        createProject(){
          axios.post(`https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg`,
          {
            id: '',
            name: 'palourde',
            description: 'l\'histoire d\'une palourde',
            collaborators:[]
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

        }
      
    } 

      
  }
</script>
<style lang="css">
.flip-list-move {
  transition: transform 1s;
}
</style>