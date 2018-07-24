<template>    
    <div>PLOUF
            {{ $route.params.id }}
           <h1>{{projectUnique.name}}</h1> 
       
    </div>
</template>

<script>
import axios from 'axios';
import  Project from "./Project.vue";
import ProjectList from "./ProjectList.vue";

export default {
  name: 'ProjectDetails',
  props: ["allProjects" , "projectUnique" , "message"],
  data () {
    return {      
     
        }

  },

    

 }
  
   
  
</script>

