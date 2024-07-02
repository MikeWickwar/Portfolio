// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './../views/HomeComponent.vue'
import AboutComponent from './../views/AboutComponent.vue'
import ResumeComponent from './../views/ResumeComponent.vue'
import ProjectComponent from './../views/ProjectsComponent.vue'
import TestimonialsComponent from './../views/TestimonialsComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/resume', component: ResumeComponent },
    { path: '/projects', component: ProjectComponent },
    { path: '/testimonials', component: TestimonialsComponent }
  ]
})
 