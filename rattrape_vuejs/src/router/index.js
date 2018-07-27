import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Project from '@/components/Project'
import ProjectDetails from '@/components/ProjectDetails'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
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
      path: '/projectDetails/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
      props: true
    }
  ]
})
