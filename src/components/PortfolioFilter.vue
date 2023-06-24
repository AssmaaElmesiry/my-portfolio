<template>
    <div class=" bg-bgsection py-24">
        <div class="container mx-auto sm:px-6 px-4">
            <div class="filter flex sm:flex-row flex-wrap justify-center">
                <label 
                    class="text-white p-3 text-base mb-5" 
                    @click="activate(1)"
                    :class="{ active : active_el == 1 }">
                    <input type="radio"  v-model="selectedCategory" value="All" class="hidden" />
                    All
                </label>
                <label 
                    class="text-white p-3 text-base mb-5" 
                    @click="activate(2)"
                    :class="{ active : active_el == 2 }">
                    <input type="radio"  v-model="selectedCategory" value="Vuejs"  class="hidden"/>
                    Vuejs
                </label>
                <label 
                    class="text-white p-3 text-base mb-5" 
                    @click="activate(3)"
                    :class="{ active : active_el == 3 }">
                    <input type="radio"  v-model="selectedCategory" value="Javascript" class="hidden" />
                    Javascript
                </label>
                <label 
                    class="text-white p-3 text-base mb-5"
                    @click="activate(4)"
                    :class="{ active : active_el == 4 }">
                    <input type="radio"  v-model="selectedCategory" value="Framework" class="hidden" />
                    Framework
                </label>
            </div>
            <ul class="people-list grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1  gap-4 w-full h-full ">
                <li v-for="project in filteredProject" :key="project" class="card ">
                    <div class="w-64 h-64 overflow-hidden rounded-lg relative flex justify-center items-center px-6 bg-bgsection">
                        <img :src=" project.Image" class="w-28"/>
                        <div class="absolute bottom-0 m-auto left-0 right-0 w-1/2 text-center rounded-t-lg  py-2 px-4 text-white bg-mainColor">
                            <p>{{project.title}}</p>
                        </div>
                    </div>
                    <div>
                        <div class="my-4">
                            <h2 class="text-center text-white text-2xl">{{project.ProjectName}}</h2>
                        </div>
                        <div>
                            <p class="text-justify text-white px-3"> {{ project.desc }} </p>
                        </div>
                        <div class="flex justify-between my-2 px-3">
                            <a :href="project.website" target="_blank" class="text-2xl text-white"><fa :icon="['fas',project.link]" /></a>
                            <a :href="project.github" target="_blank" class="text-2xl text-white"><fa :icon="['fab',project.code]" /></a>
                        </div>
                    </div>
                    <!-- <div class="text w-full px-3 text-center absolute top-0 left-1/2 transform -translate-x-2/4  opacity-0 transition-all ease-in-out duration-700">
                        <h2 class="text-white text-3xl">{{project.ProjectName}}</h2>
                        <p class="text-mainColor">{{project.title}}</p>
                    </div>
                    <a class="more opacity-0 text-center bottom-0 left-0 w-full flex justify-center absolute transition-all ease-in-out duration-700" :href="project.src" target="_blank">
                        <mainbuttonVue  @click="showModal(project.id)">LEARN MORE</mainbuttonVue>
                    </a> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import mainbuttonVue from './ButtonStyle/mainbutton.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from "../assets/codebug.png"
import img2 from "../assets/bot.png"
import img3 from "../assets/mzadat.png"
import img4 from "../assets/sms.png"
import img5 from "../assets/qiran.svg"
import img6 from "../assets/lotus.png"
export default {
    data() {
        return {
            test: false,
            test2: false,
            projects: [
                {
                    id:1,
                    Image: img1,
                    'ProjectName': 'CodeBugLab',
                    title: 'Vuejs',
                    category: "Vuejs",
                    link:"link",
                    desc: "We are startup company creating and maintaining web applications and open source packages.",
                    link: "link",
                    code: "github",
                    website: "https://codebuglab.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/codebuglab",
                },
                {
                    id:2,
                    Image: img2,
                    'ProjectName': 'Comentatk Bot',
                    title: 'Vuejs',
                    category: "Vuejs",
                    link:"link",
                    code: "github",
                    desc: 'Build your bot with your feedback control panel ,Bot without the need for any technical expertise.',
                    website: "https://www.c-bot.net/",
                    github: "https://www.c-bot.net/",
                },
                {
                    id:3,
                    Image: img3,
                    'ProjectName': 'Mzadat',
                    title: 'Vuejs',
                    category: "Vuejs",
                    link:"link",
                    code: "github",
                    desc: "Everything you are looking for in the world of online shopping and auction.",
                    website: "https://project-mzadat.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/Project_mzadat",
                },
                {
                    id:4,
                    Image: img4,
                    'ProjectName': 'Comentatk SmS',
                    title: 'Javascript',
                    category: "Javascript",
                    link:"link",
                    code: "github",
                    src: ('https://assmaa.commentatk-media.com/project/index.html'),
                    desc: "Our platform is full of efficient and complete tools to manage your messages.",
                    website: "https://commentatk-sms.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/commentatk-sms",
                },
                {
                    id:5,
                    Image: img5,
                    'ProjectName': 'Qiran',
                    title: 'Vuejs',
                    category: "Vuejs",
                    link:"link",
                    code: "github",
                    desc: "We are startup company creating and maintaining web applications and open source packages.",
                    website: "https://qiran-app.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/Qiran",
                },
                {
                    id:6,
                    Image: img6,
                    'ProjectName': 'Yoga',
                    title: 'Vuejs',
                    category: "Vusjs",
                    link:"link",
                    code: "github",
                    desc: 'Yoga Studio and meditation , You Can Always Control What Goes On Inside',
                    website: "https://yoga-chi.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/Yoga",

                },
                {
                    id:7,
                    Image: img3,
                    'ProjectName': 'Mzadat',
                    title: 'Vuejs',
                    category: "Framework",
                    link:"link",
                    code: "github",
                    desc: "Everything you are looking for in the world of online shopping and auction.",
                    website: "https://project-mzadat.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/Project_mzadat",

                },
                {
                    id:8,
                    Image: img1,
                    'ProjectName': 'Comentatk SmS',
                    title: 'Vuejs',
                    category: "Framework",
                    link:"link",
                    code: "github",
                    src: ('https://assmaa.commentatk-media.com/project/index.html'),
                    desc: "Our platform is full of efficient and complete tools to manage your messages.",
                    website: "https://commentatk-sms.vercel.app/",
                    github: "https://github.com/AssmaaElmesiry/commentatk-sms",

                },
            ],
            selectedCategory: "All",
            active_el: 1,
        }
    },
    components:{
        mainbuttonVue,
        Swiper,
        SwiperSlide,
    },
	computed: {
		filteredProject: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category === "All") {
				return vm.projects;
                
			} else {
				return vm.projects.filter(function(project) {
					return project.category === category;
				});
			}
		}
	},
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        activate:function(el){
            this.active_el = el;
        },
    },
}
</script>
<style>
label:hover{
    color: #45BEB7;
    transition: .6s ease all;
}
label.active{
    color: #45BEB7;
    transition: .6s ease all;
}
/* .people-list li:hover img{
    opacity: 0.2;
    transition: 0.6s ease all;
} */
/* li:hover .text{
    opacity: 1;
    top: 25%;
    transition: all 700ms ease-in-out;
} */
/* li:hover .more{
    opacity: 1;
    bottom: 25%;
    transition: all 700ms ease-in-out;
} */
.card{
    /* width: 100%; */
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #45BEB7;
}
/* .card img{
    transition: transform 10s ease-in-out;
}
.card div:hover img{
    transform: translateY(calc(-100% + 256px));
  transition: transform 10s ease-in-out;
} */
</style>