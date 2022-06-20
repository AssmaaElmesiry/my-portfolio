<script>
import mouseStyleVue from "./components/mouseStyle.vue";
import HeaderStyleVue from "./components/HeaderStyle.vue";
import introVue from "./components/intro.vue";
import AboutMeVue from "./components/AboutMe.vue";
import MySkillVue from "./components/MySkill.vue";
import ProjectsVue from "./components/Projects.vue";
import MyServicesVue from "./components/MyServices.vue";
import FooterVue from "./components/Footer.vue";
export default{
  components:{
    mouseStyleVue,
    HeaderStyleVue,
    introVue,
    AboutMeVue,
    MySkillVue,
    ProjectsVue,
    MyServicesVue,
    FooterVue,
  }
}
</script>

<template>
  <mouseStyleVue/>
  <HeaderStyleVue/>
  <introVue/>
  <AboutMeVue/>
  <MySkillVue/>
  <ProjectsVue/>
  <MyServicesVue/>
  <FooterVue/>
</template>

<style>
@import './assets/base.css';
</style>
