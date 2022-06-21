<template>
        <section class="container mx-auto sm:px-6 px-4">
                <div class="flex flex-wrap justify-between">
                        <div class="w-itemW mb-6 pr-32 flex flex-col justify-center">
                                <span class="text-mainColor text-2xl font-bold mb-1">What I Do</span>
                                <h2 class="text-white text-6xl">My Services</h2>
                                <p class="text-lg mt-8 text-gray">i offer high quality products for competitive prices. my main goal is customer satisfaction, which i obtain through market orientation of ongoing service and support.</p>
                        </div>
                        <div v-for="service in services" :key="service.id" class="w-itemW mb-6 bg-bgHeader pt-16 pr-16 pb-14 pl-9 flex items-center rounded-md">
                                <div>
                                        <fa :icon="service.icon" class="text-6xl text-mainColor"/>
                                </div>
                                <div class="ml-7">
                                        <h2 class="text-white text-4xl">{{service.title}}</h2>
                                        <p class="text-gray  mt-8">{{service.desc}}</p>
                                </div>
                        </div>
                        <div class="w-itemW mb-6 px-24 font-bold text-center flex flex-col justify-center items-center">
                                <h2 class="text-4xl text-white ">Do You Want Something Different?</h2>
                                <mainbuttonVue class="mt-6"> Knock Me  <fa icon="envelope-open-text" class="pl-4" /></mainbuttonVue>
                        </div>
                </div>
        </section>
</template>
<script>
import mainbuttonVue from './ButtonStyle/mainbutton.vue'
export default{
        data() {
        return {
                services:[
                        {
                                id: 1,
                                title: 'Fast',
                                icon: 'gauge-high',
                                desc: 'Fast load times and lag free interaction, my highest priority. '
                        },
                        {
                                id: 2,
                                title: 'Responsive',
                                icon: 'mobile-screen-button',
                                desc: 'My layouts will work on any device, big or small.'
                        },
                        {
                                id: 3,
                                title: 'Intuitive',
                                icon: 'lightbulb',
                                desc: 'Strong preference for easy to use, intuitive UX/UI.'
                        },
                        {
                                id: 4,
                                title: 'Dynamic',
                                icon: 'rocket',
                                desc: "Websites don't have to be static, I love making pages come to life."
                        },
                ]
                }
        },
        components:{
                mainbuttonVue,
        }

}
</script>