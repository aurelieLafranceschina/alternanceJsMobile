<template>    
    <div>PLOUF
             <Project  v-for="project in allProjects" v-bind:key="project._id" :projectUnique="project"
            ></Project>   
        <li>
            <!-- <div  class="active">
                {{ projectUnique.name}}
                {{projectUnique.id}}
                {{projectUnique.creation}} -->

                  
               
            <!-- </div> -->
        </li>
    </div>
</template>

<script>
import axios from 'axios';
import  Project from "./Project.vue";
import ProjectList from "./ProjectList.vue";
export default {
  name: 'Project',
  props: ["allProjects" , "projectUnique" , "message"],
  data () {
    return {      
     
        }

  },

    methods:{ }

 }
  
   
  
</script>

