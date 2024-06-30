// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import AboutComponent from './../components/AboutComponent.vue'
import ResumeComponent from './../components/ResumeComponent.vue'
import ProjectComponent from './../components/ProjectsComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: AboutComponent },
    { path: '/resume', component: ResumeComponent },
    { path: '/projects', component: ProjectComponent }
  ]
})
