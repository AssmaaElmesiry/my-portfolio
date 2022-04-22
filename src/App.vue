<script>
import mouseStyleVue from "./components/mouseStyle.vue";
import HeaderStyleVue from "./components/HeaderStyle.vue";
import introVue from "./components/intro.vue";
import AboutMeVue from "./components/AboutMe.vue";
export default{
  components:{
    mouseStyleVue,
    HeaderStyleVue,
    introVue,
    AboutMeVue,
  }
}
</script>

<template>
  <mouseStyleVue/>
  <HeaderStyleVue/>
  <introVue/>
  <AboutMeVue/>
</template>

<style>
@import './assets/base.css';
</style>
