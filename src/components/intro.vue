<template>
    <section class="intro w-full h-screen relative bg-bgHeader">
        <div class="container mx-auto sm:px-20 px-4">
            <div class="mask w-full h-screen relative">
                <div class="content absolute w-1/2 top-1/2 z-10 transform -translate-y-1/2">
                    <P class="text-white text-xl font-bold">Hello, I'm</P>
                    <h1 class="text-6xl text-mainColor font-bold my-3">Assmaa</h1>
                    <h2 class="text-white flex items-end sm:text-5xl text-4xl"> Creative <VueWriter :array="arr" /></h2>
                    <div class="buttons flex items-center mt-9">
                        <mainbutton class="ml-2"> Say Hello <fa icon="envelope-open-text" class="pl-4" /></mainbutton>
                    </div>
                </div>
                <kinesis-container class="kinesis-container w-full h-full flex">
                    <kinesis-element :strength="30" class="kinesis-item">
                        <div class="images absolute top-0 right-28 bottom-0 w-1/3 z-10">
                            <img src="../assets/intro.png" class="w-full h-auto absolute top-1/2 transform -translate-y-1/2" />
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item2">
                        <div class="bgimage">
                            <img src="../assets/item1.png" class="absolute top-1/4 right-1/3 w-12"/>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="80" class="kinesis-item3">
                        <div class="bgimage">
                            <img src="../assets/item4.png" class="absolute w-12 bottom-1/4 right-14"/>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item4">
                        <div class="bgimage">
                            <img src="../assets/item2.png" class="absolute w-12 top-1/2 right-8"/>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item5">
                        <div class="bgimage">
                            <img src="../assets/item5.png" class="absolute w-12 top-1/3 right-16"/>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item6">
                        <div class="bgimage">
                            <img src="../assets/item3.png" class="absolute w-12 bottom-item6b left-item6l"/>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item7">
                        <div class="bgimage">
                            <img src="../assets/item6.png" class="absolute w-4 top-1/2 right-item7r"/>
                        </div>
                    </kinesis-element>
                </kinesis-container>
                <ul class="social fixed z-50 md:left-4 right-3 md:top-1/2 top-3/4 h-36 flex flex-col justify-between w-min">
                    <li><a href="#"><fa class="text-white text-xl transition ease-out duration-300 hover:text-mainColor :hover:transition hover:ease-out hover:duration-300" icon="envelope-open-text" /></a></li>
                    <li><a href="#"><fa class="text-white text-xl transition ease-out duration-300 hover:text-mainColor :hover:transition hover:ease-out hover:duration-300" :icon="['fab','instagram']" /></a></li>
                    <li><a href="#"><fa class="text-white text-xl transition ease-out duration-300 hover:text-mainColor :hover:transition hover:ease-out hover:duration-300" :icon="['fab','google']" /></a></li>
                    <li><a href="#"><fa class="text-white text-xl transition ease-out duration-300 hover:text-mainColor :hover:transition hover:ease-out hover:duration-300" :icon="['fab','facebook-f']" /></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import VueWriter from 'vue-writer'
import mainbutton from './ButtonStyle/mainbutton.vue'

export default{
    data() {
        return {
            arr: [" Front-End ", " Freelancer"]
        }
    },
    components: {
        VueWriter,
        mainbutton,
        KinesisContainer,
        KinesisElement,
    },
}
</script>
<style scoped>
.about::before{
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: -3px;
    transition: width .6s cubic-bezier(.25,.8,.25,1) 0s;
    background: #fff;
}
.about:hover::before{
    width: 100%;
    left: 0;
    right: auto;
    bottom: -3px;
}
/* Style About Kinesis Animation */
.intro .mask .kinesis-container .kinesis-item{
    width: 100%;
    height: 100%;
}

.intro .mask .kinesis-container  .kinesis-item2 .bgimage,
.intro .mask .kinesis-container .kinesis-item2 .bgimage,
.intro .mask .kinesis-container .kinesis-item3 .bgimage,
.intro .mask .kinesis-container .kinesis-item4 .bgimage,
.intro .mask .kinesis-container .kinesis-item5 .bgimage,
.intro .mask .kinesis-container .kinesis-item6 .bgimage,
.intro .mask .kinesis-container .kinesis-item7 .bgimage{
  width: 100%;
  height: 100%;
  position: relative;
}
.intro .mask .kinesis-container .kinesis-item2,
.intro .mask .kinesis-container .kinesis-item3,
.intro .mask .kinesis-container .kinesis-item4,
.intro .mask .kinesis-container .kinesis-item5,
.intro .mask .kinesis-container .kinesis-item6,
.intro .mask .kinesis-container .kinesis-item7{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

/* Style About Vue Writer */
.is-typed {
  color: #45BEB7;
  padding-left: 10px;
  font-size: 40px;
}
.is-typed >span{
  font-weight: bold !important;
}
/* Responsive */
@media (max-width: 767px){
    .intro .mask .kinesis-container{
        display: none;
    }
    .intro .mask .content{
        width: 100%;
    }
}
</style>