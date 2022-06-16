<template>
    <div class=" bg-bgsection py-24">
        <div class="container mx-auto px-4">
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
            <ul class="people-list flex flex-wrap justify-center w-full h-full ">
                <li v-for="project in filteredProject" :key="project" class="relative overflow-hidden w-80 h-80 p-3 transition-all ease-in-out duration-700">
                    <img :src=" project.Image" class="w-full"/>
                    <div class="text w-full px-3 text-center absolute top-0 left-1/2 transform -translate-x-2/4  opacity-0 transition-all ease-in-out duration-700">
                        <h2 class="text-white text-3xl">{{project.ProjectName}}</h2>
                        <p class="text-mainColor">{{project.title}}</p>
                    </div>
                    <div class="more opacity-0 text-center bottom-0 left-0 w-full flex justify-center absolute transition-all ease-in-out duration-700"><mainbuttonVue>LEARN MORE</mainbuttonVue></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import mainbuttonVue from './ButtonStyle/mainbutton.vue';
export default {
    data() {
        return {
            projects: [
                { Image: ("../src/assets/1.png"), 'ProjectName': 'asasas', title: 'Vuejs', category: "Vuejs", link:"link"},
                { Image: ("../src/assets/2.png"), 'ProjectName': 'asasas', title: 'Vuejs', category: "Vuejs", link:"link"},
                { Image: ("../src/assets/3.png"), 'ProjectName': 'asasas', title: 'Vuejs', category: "Vuejs", link:"link"},
                { Image: ("../src/assets/4.png"), 'ProjectName': 'asasas', title: 'HTML + Css + Javascript', category: "Javascript", link:"link"},
                { Image: ("../src/assets/1.png"), 'ProjectName': 'asasas', title: 'HTML + Css + Javascript', category: "Javascript", link:"link"},
                { Image: ("../src/assets/2.png"), 'ProjectName': 'asasas', title: 'HTML + Css + Javascript', category: "Javascript", link:"link"},
                { Image: ("../src/assets/3.png"), 'ProjectName': 'asasas', title: 'Vuejs + bootstrap', category: "Framework", link:"link"},
                { Image: ("../src/assets/4.png"), 'ProjectName': 'asasas', title: 'Vuejs + tailwindCSS', category: "Framework", link:"link"},
            ],
            selectedCategory: "All",
            active_el: 1,
        }
    },
    components:{
        mainbuttonVue,
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
    methods: {
        activate:function(el){
            this.active_el = el;
        }
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
.people-list li:hover img{
    opacity: 0;
    transition: 0.6s ease all;
}
li:hover .text{
    opacity: 1;
    top: 25%;
    transition: all 700ms ease-in-out;
}
li:hover .more{
    opacity: 1;
    bottom: 25%;
    transition: all 700ms ease-in-out;
}
</style>