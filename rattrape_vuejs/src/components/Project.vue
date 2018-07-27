<template>    
    <div>
        <li>
           <th>{{ projectUnique.name}}</th>
           <tr><img :src="projectUnique.creator.picture"></tr>
           <tr>{{projectUnique.creator.name}}</tr>
           <tr>{{projectUnique.description}}</tr>
                <td >
                <input  type="checkbox" id="checkbox" >
                <label v-if="checked" for="checkbox">{{ checkProject }}</label>
                <label  v-else for="checkbox">{{ uncheckedProject }}</label>
                <router-link :to="{name: 'ProjectDetails', params: {id: projectUnique.id , projectUnique:projectUnique}}">Select this project</router-link>
                <tr><button @click="deleteProject()"  type="button" class="btn btn-info">Supprimer ce projet</button></tr>
                </td>
        </li>
        </div>
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'Project',
  props: ["projectUnique" , "message"],
  data () {
    return {   
      checked: true , 
      checkProject: 'Actif',
      uncheckedProject: 'Inactif',
        }

  },

  methods: {

    deleteProject() {
      axios.delete('https://daily-standup-campus.herokuapp.com/api/projects/'+this.projectUnique.id+'?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg'
      )
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

  },

   

 }
  
   
  
</script>

