<!-- src/components/ProjectDetailComponent.vue -->
<template>

  <div class="projectDetailContainer">
      <div v-if="projectId == 'smarttime'">
        <SmartTimeComponent></SmartTimeComponent>
    </div>
    <div v-if="projectId == 'ids'">
        <IdsComponent></IdsComponent>
    </div>
    <div v-if="projectId == 'vdf'">
        <VdfComponent></VdfComponent>
    </div>
    <div v-if="projectId == 'dw'">
        <DrillWriterComponent></DrillWriterComponent>
    </div>

  <div class="btnContainer">
      <b-button :href="projectsUrl" variant="primary" class="card-btn">Back</b-button>
      <b-button v-if="btnText !== null" :href="urlForCardBtn" target="_blank" variant="primary" class="card-btn">More...</b-button>
      <b-button v-if="deployUrl !== null" :href="deployUrl" target="_blank" variant="primary" class="card-btn">The Site</b-button>
  </div>
  </div>
  
</template>

<script>
import SmartTimeComponent from './../components/SmartTimeComponent'
import DrillWriterComponent from './../components/DrillWriterComponent'
import IdsComponent from './../components/IdsComponent'
import VdfComponent from './../components/VdfComponent'

export default {
  name: 'ProjectDetailComponent',
  components: {
    SmartTimeComponent,
    IdsComponent,
    VdfComponent,
    DrillWriterComponent
  },
  props: {
    projectId: {
      type: String,
      required: true
    },
    deployUrl: {
      type: String,
      default: null
    },
    urlForCardBtn: String,
    btnText: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      projectsUrl: "#/projects",
      project: {} // Initialize or fetch project details based on projectId
    };
  },
  created() {
    // Example: Fetch project details based on projectId
    this.fetchProjectDetails();
  },
  methods: {
    fetchProjectDetails() {
      // Example: Fetch project details from API or local data based on projectId
      // Replace with your actual logic
      this.project = {
        title: `Project ${this.projectId}`,
        description: `Description of Project ${this.projectId}`
        // Add more details as needed
      };
    }
  }
};
</script>

<style scoped>
/* Add scoped styles for the project detail component */
.project-detail {
  margin: 20px;
}
.projectDetailContainer{
    max-width: 80vw;
    margin: 0 auto; 
    margin-top: 75px;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #e2e4e7;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
    border-radius: 10px;
    position: relative;
    z-index: 1;
}
.btnContainer{
  display: flex;
  width: 100%;
}
.card-btn{
  margin-right: 10px;
  margin-top: 10px;
}
</style>
