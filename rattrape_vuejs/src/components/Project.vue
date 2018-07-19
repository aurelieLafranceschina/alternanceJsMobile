<template>    
    <div>
        <li>
            <div v-bind:class ="{active : projectUnique.isActive}">{{ projectUnique.name}}
                <td>
                <input  type="checkbox" id="checkbox" v-model="projectUnique.isActive" >
                <label v-if="projectUnique.isActive" for="checkbox">{{ checkProject }}</label>
                <label v-else for="checkbox">{{ uncheckedProject }}</label>
                </td>
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

