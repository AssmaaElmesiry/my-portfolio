<script>
import mouseStyleVue from "./components/mouseStyle.vue";
import HeaderStyleVue from "./components/HeaderStyle.vue";
import introVue from "./components/intro.vue";
export default{
  components:{
    mouseStyleVue,
    HeaderStyleVue,
    introVue,
  }
}
</script>

<template>
  <mouseStyleVue/>
  <HeaderStyleVue/>
  <introVue/>
</template>

<style>
@import './assets/base.css';
</style>
