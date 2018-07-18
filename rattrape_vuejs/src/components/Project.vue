<template>    
    <div>
        <li>
            <div v-bind:class ="{active : projectUnique.isActive}">{{ projectUnique.name}}
                <input  type="checkbox" id="checkbox" v-model="projectUnique.isActive" >
                <label v-if="projectUnique.isActive" for="checkbox">{{ checkProject }}</label>
                <label v-else for="checkbox">{{ uncheckedProject }}</label>
            </div>
        </li>
    </div>
</template>

<script>
export default {
  name: 'Project',
  props: ["projectUnique" , "message"],
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