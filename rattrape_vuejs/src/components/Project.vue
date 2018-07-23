<template>    
    <div>
        <li>
           <th>{{ projectUnique.name}}</th>
           <tr>{{projectUnique.creator.picture}}</tr>
           <tr>{{projectUnique.creator.name}}</tr>
           <tr>{{projectUnique.description}}</tr>
                <td >
                <input  type="checkbox" id="checkbox" >
                <label v-if=checked for="checkbox">{{ checkProject }}</label>
                <label  v-else for="checkbox">{{ uncheckedProject }}</label>
                <router-link to="/projectDetails">Select this project</router-link>
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
      checkProject: 'Actif',
      uncheckedProject: 'Inactif',
        }

  },

    methods:{ }

 }
  
   
  
</script>

