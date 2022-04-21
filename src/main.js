import { createApp } from 'vue'
import App from './App.vue'

import VueKinesis from "vue-kinesis"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, fab)

import VueWriter from "vue-writer";




const app = createApp(App);
app.use(VueKinesis);
createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(VueWriter)
    .mount('#app')