<template>
<section class="AboutMe py-24 px-0 bg-bgsection h-full" id="aboutme">
    <div class="container mx-auto sm:px-6 px-4">
        <div class="mask flex md:flex-row flex-col justify-between">
            <div class="md:w-1/2 w-full flex justify-center items-center">  
                <div class="myphoto w-72 filter grayscale hover:filter hover:grayscale-0 transition ease-in duration-300">
                    <img src="../assets/frame.png" class="transform rotate-12 hover:rotate-0 transition ease-in duration-300" alt="porfile pic" />
                </div>
            </div>
            <div class="md:w-1/2 w-full">
                <div class="self-center">
                    <div class="title">
                        <span class="text-mainColor text-sm font-bold">About Me</span>
                        <h2 class="text-4xl text-white">I'm <span class="text-mainColor font-bold">Assmaa</span></h2>
                        <h1 class="text-5xl text-white">Web <span class="text-mainColor font-bold">Designer</span></h1>
                    </div>
                    <div class=" my-5">
                        <p class="text-justify text-white text-base">Hi! My name is Assmaa El-Mesiry. front-end web developer is responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do. </p>
                    </div>
                    <ul class="information flex flex-col text-white">
                        <li v-for="(value, key) in myInformation" :key="(value, key)" class="flex items-baseline text-gray text-base">
                            <fa :icon="['fa',value.icon]" class="text-mainColor"/>
                            <span class="font-bold relative pr-12 pl-5"> {{ key }}</span>
                            <p class="relative desc"> {{ value.info }} </p>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        <div class="my-14">
            <h2 class="text-xl font-bold text-mainColor mb-14 lg:ml-interstM"> My Interests</h2>
            <ul class="interests flex sm:flex-row justify-center items-center flex-col">
                <div v-for="value in myInterests" :key='value' class="md:mr-14 mb-4 text-center">
                    <li  class="w-16 h-16 border-2 border-solid border-mainColor rounded-full flex flex-col justify-center text-white text-center mb-3 transition ease-in duration-300">
                        <fa :icon="['fas',value.icon]" class="text-2xl text-mainColor transition ease-in duration-300"/>
                    </li>
                    <p class="text-white opacity-0">{{value.item}}</p>
                </div>
            </ul>
        </div>
        <div class="flex justify-center my-14">
            <a :href="CV" target="_blank" ><mainbutton class="mainbutton" > Download resume <fa icon="download" /></mainbutton></a>
        </div>
    </div>
</section>
</template>
<script>
import mainbutton from './ButtonStyle/mainbutton.vue'
export default{
    data() {
        return {
            CV: ('../../src/assets/Cv.pdf'),
            myInformation:{
                Name:{
                    info:'Assmaa El-Mesiry',
                    icon:'user'
                },
                Phone:{
                    info: '01555209247',
                    icon:'phone',
                },
                Email:{
                    info: 'assmaaelmesiry@gmail.com',
                    icon:'envelope-open-text',
                },
            },
            myInterests:[
                {
                    icon: 'suitcase-rolling',
                    item: 'Travel',
                },
                {
                    icon: 'film',
                    item: 'Movie',
                },
                {
                    icon: 'seedling',
                    item: 'yoga',
                },
                {
                    icon: 'palette',
                    item: 'Art',
                },
                {
                    icon: 'code',
                    item: 'coding',
                },
            ]
        }
    },
    components: {
        mainbutton,
    },
}
</script>

<style scoped>
.desc::before{
    content: ":" !important;
    position: absolute;
    top: 0;
    left: -25px;
    color: #45BEB7;
}
.myphoto::before{
    content: "";
    background-image: url("../assets/mee.webp");
    position: absolute;
    top: 2px;
    left: 34px;
    width: 80%;
    height: 99%;
    background-size: cover;
}
.myphoto:hover{
    filter: none;
}
.interests div:hover p{
    animation: toBottomFromTop 0.3s forwards;
    opacity: 1;
}
.interests div:hover li{
    background-color: #45BEB7;
}
.interests div:hover svg{
    color: #fff;
}
@keyframes toBottomFromTop{
    49% {
        transform: translateY(100%);
    }

}
</style>