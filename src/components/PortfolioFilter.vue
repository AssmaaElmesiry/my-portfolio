<template>
    <section class="Porfolio">
        <div class="container">
            <div class="filter">
                <label><input type="radio"  v-model="selectedCategory" value="All" /> All</label>
                <label><input type="radio"  v-model="selectedCategory" value="company" /> company</label>
                <label><input type="radio"  v-model="selectedCategory" value="Coming Soon" /> Coming Soon</label>
                <label><input type="radio"  v-model="selectedCategory" value="Portfolio" /> Portfolio</label>
            </div>
            <ul class="people-list">
                <li v-for="project in filteredProject" :key="project" v-tilt>
                    <img :src=" project.Image"/>
                    <span><a href="#"><fa :icon="['fa',project.link]"/></a></span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            projects: [
			{ Image: ("../src/assets/1.png"), category: "company", link:"link"},
			{ Image: ("../src/assets/2.png"), category: "company", link:"link"},
			{ Image: ("../src/assets/3.png"), category: "company", link:"link"},
			{ Image: ("../src/assets/4.png"), category: "Portfolio", link:"link"},
			{ Image: ("../src/assets/1.png"), category: "Portfolio", link:"link"},
			{ Image: ("../src/assets/2.png"), category: "Portfolio", link:"link"},
			{ Image: ("../src/assets/3.png"), category: "Fictional", link:"link"},
			{ Image: ("../src/assets/4.png"), category: "Fictional", link:"link"},
			{ Image: ("../src/assets/2.png"), category: "Coming Soon", link:"link"}
            ],
            selectedCategory: "All"
            }
            
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
}
</script>
<style>
.Porfolio{
    background-color: #3c3c3c;
    padding: 100px 0;
}
.Porfolio .filter{
    display: flex;
    justify-content: center;
}
.Porfolio .filter label{
    color: #fff;
    padding: 10px;
    font-size: 26px;
    margin-bottom: 20px;
}
.Porfolio .filter label:hover{
    color: #45BEB7;
    transition: .6s ease all;
}
.Porfolio .filter label input{
    display: none;
}
.Porfolio .people-list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.Porfolio .people-list li {
    width: 32%;
    height: 300px;
    padding: 11px !important;
    overflow: hidden;
    position: relative;
}
.Porfolio .people-list li img{
    width: 100%;
    transition: 0.6s ease all;

}
.Porfolio .people-list li:hover img{
    backdrop-filter: blur(10px);
    filter: blur(4px);
    transition: 0.6s ease all;
}
.Porfolio .people-list li:hover span{
    opacity: 1;
    transition: 0.6s ease all;
}
.Porfolio .people-list li span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    opacity: 0;
    transition: 0.6s ease all;
}
.Porfolio .people-list li span svg{
    color: #45BEB7;
    font-size: 45px;    
}
</style>