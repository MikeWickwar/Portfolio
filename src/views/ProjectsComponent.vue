<template>
  <div class="projects-container">
    <CardComponent 
        :title="smartTimeComponentTitle" 
        :urlForCardBtn="smartTimeOverviewUrl" 
        :img="smartTimeImg"
        :btnText="smartTimeBtnText">
      <template #childCardComponent>
            <SmartTimeComponent></SmartTimeComponent>
      </template>
    </CardComponent>
    <CardComponent 
        :title="idsComponentTitle" 
        :urlForCardBtn="idsOverviewUrl" 
        :img="idsImg"
        :btnText="idsButtunText">
      <template #childCardComponent>
            <IdsComponent></IdsComponent>
      </template>
    </CardComponent>
    <CardComponent 
        :title="vdfComponentTitle" 
        :urlForCardBtn="vdfOverviewUrl" 
        :img="vdfImg"
        :btnText="vdfButtunText"
        :deployUrl="vdfDeployment">
      <template #childCardComponent>
            <VdfComponent></VdfComponent>
      </template>
    </CardComponent>
        <CardComponent 
        :title="mbComponentTitle" 
        :urlForCardBtn="mbOverviewUrl" 
        :img="mbImg"
        :btnText="mbButtunText">
      <template #childCardComponent>
            <DrillWriterComponent></DrillWriterComponent>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent'
import SmartTimeComponent from '../components/SmartTimeComponent'
import IdsComponent from '../components/IdsComponent'
import VdfComponent from '../components/VdfComponent'
import DrillWriterComponent from '../components/DrillWriterComponent'

export default {
  name: 'ProjectsComponent',
  components: {
    CardComponent,
    SmartTimeComponent,
    IdsComponent,
    VdfComponent,
    DrillWriterComponent
  },
  data() {
    return {
      smartTimeOverviewUrl: "https://www.bighand.com/en-us/our-solutions/smarttime/",
      smartTimeComponentTitle: "BigHand SmartTime",
      smartTimeImg: "smarttime.png",
      smartTimeBtnText: "View More BigHand SmartTime",
      idsOverviewUrl: "https://github.com/MikeWickwar/MyIdentityServer",
      idsComponentTitle: "BigHand Identity Platform",
      idsImg: "ids.jpeg",
      idsButtunText: "View My Personal Identity Server",
      vdfOverviewUrl: "https://github.com/MikeWickwar/VDF",
      vdfDeployment: "https://mikewickwar.github.io/VDF/",
      vdfComponentTitle: "Vegas Deal Finder",
      vdfImg: "vegas.jpeg", 
      vdfButtunText: "View Vegas Deal Finder Project",
      mbOverviewUrl: "https://github.com/MikeWickwar/drillWriter",
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
.projects-container{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;
}
</style>
