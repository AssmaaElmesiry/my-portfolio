<template>
    <div>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
      <ul>
        <li
          v-for="(thumb, thumbIndex) in [
            'path/to/thumb_1.jpeg',
            'path/to/thumb_2.jpeg',
          ]"
          :key="thumbIndex"
          @click="index = thumbIndex"
        >
          <img :src="thumb">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    import { LightGallery } from 'vue-light-gallery';
  
    export default {
      components: {
        LightGallery,
      },
      data() {
        return {
          images: [
            { title:'img 1', url: 'path/to/image_1.jpg' },
            { title:'img 2', url: 'path/to/image_2.jpg' },
          ],
          index: null,
        };
      },
    };
  </script>