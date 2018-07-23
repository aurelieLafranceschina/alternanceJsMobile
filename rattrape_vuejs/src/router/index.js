import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Project from '@/components/Project'
import ProjectDetails from '@/components/ProjectDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projectList',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },

    {
      path: 'projectDetails/{{_id}}',
      name: 'ProjectDetails',
      component: ProjectDetails
    }
  ]
})
