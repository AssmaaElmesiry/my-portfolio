<script>
import mouseStyleVue from "./components/mouseStyle.vue";
import HeaderStyleVue from "./components/HeaderStyle.vue";
import introVue from "./components/intro.vue";
import AboutMeVue from "./components/AboutMe.vue";
import MySkillVue from "./components/MySkill.vue";
import PortfolioFilterVue from "./components/PortfolioFilter.vue";
export default{
  components:{
    mouseStyleVue,
    HeaderStyleVue,
    introVue,
    AboutMeVue,
    MySkillVue,
    PortfolioFilterVue,
  }
}
</script>

<template>
  <mouseStyleVue/>
  <HeaderStyleVue/>
  <introVue/>
  <AboutMeVue/>
  <MySkillVue/>
  <PortfolioFilterVue/>
</template>

<style>
@import './assets/base.css';
</style>
