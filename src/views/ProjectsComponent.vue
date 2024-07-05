<template>
  <div class="projects-container">
    <router-link :to="{name: 'ProjectDetailComponent', params: { projectId: smartTimeComponentId, urlForCardBtn: smartTimeOverviewUrl,  btnText: smartTimeBtnText}}" >
      <CardComponent 
          :title="smartTimeComponentTitle" 
          :img="smartTimeImg">
      </CardComponent>
    </router-link>

    <router-link :to="{name: 'ProjectDetailComponent', params: { projectId: idsComponentId, urlForCardBtn: idsOverviewUrl,  btnText: idsButtunText }}" >
      <CardComponent 
          :title="idsComponentTitle" 
          :img="idsImg">
      </CardComponent>
    </router-link>

    <router-link :to="{name: 'ProjectDetailComponent', params: { projectId: vdfComponentId, urlForCardBtn: vdfOverviewUrl,  btnText: vdfButtunText, deployUrl: vdfDeployment}}" >
      <CardComponent 
          :title="vdfComponentTitle" 
          :img="vdfImg">
      </CardComponent>
    </router-link>

     <router-link :to="{name: 'ProjectDetailComponent', params: { projectId: mbComponentId, urlForCardBtn: mbOverviewUrl,  btnText: mbButtunText}}" >
      <CardComponent 
          :title="mbComponentTitle" 
          :img="mbImg">
      </CardComponent>
    </router-link>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent'

export default {
  name: 'ProjectsComponent',
  components: {
    CardComponent
  },
  data() {
    return {
      smartTimeOverviewUrl: "https://www.bighand.com/en-us/our-solutions/smarttime/",
      smartTimeComponentId: "smarttime",
      smartTimeComponentTitle: "BigHand SmartTime",
      smartTimeImg: "smarttime.png",
      smartTimeBtnText: "View More BigHand SmartTime",
      idsOverviewUrl: "https://github.com/MikeWickwar/MyIdentityServer",
      idsComponentId: "ids",
      idsComponentTitle: "BigHand Identity Platform",
      idsImg: "ids.jpeg",
      idsButtunText: "View My Personal Identity Server",
      vdfOverviewUrl: "https://github.com/MikeWickwar/VDF",
      vdfComponentId: "vdf",
      vdfDeployment: "https://mikewickwar.github.io/VDF/",
      vdfComponentTitle: "Vegas Deal Finder",
      vdfImg: "vegas.jpeg", 
      vdfButtunText: "View Vegas Deal Finder Project",
      mbOverviewUrl: "https://github.com/MikeWickwar/drillWriter",
      mbComponentId: "dw",
      mbComponentTitle: "Marching Band Drill Writer (WIP)",
      mbImg: "grid.png",
      mbButtunText: "View Drill Writer App Project"
    };
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.projects-container {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
}
</style>
