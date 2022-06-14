<template>
    <header :class="{'scrolled-nav': scrolledNav }" class="h-auto w-full z-50 fixed text-white py-5 transition ease-in duration-300">
        <div class="container mx-auto px-4 flex">
            <div class="flex flex-grow">
                <img src="../assets/logo.png" class="max-w-maxWidthHeader"/>
            </div>
            <nav class="relative flex flex-grow justify-end items-center mx-auto my-0 transition ease-in duration-300">
                <ul v-show="!mobile" class="flex justify-around w-full ">
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="/">Home</a></li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#aboutme">About</a> </li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#portfolio">Portfolio</a></li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#service">Service</a> </li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#testimonial">Testimonial</a></li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#blog">Blog</a> </li>
                    <li> <a class="text-white text-xl relative transition ease-in duration-300" href="#connectme">Contact</a></li>
                </ul>
                <div class="icon">
                    <fa icon="bars" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}" />
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="flex flex-col fixed w-full h-full bg-bgHeader top-0 left-0 p-6 text-center max-w-dropdownWidth">
                        <div class="flex justify-center mb-10">
                            <img src="../assets/logo.png" class="w-1/3"/>
                        </div>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="/">Home</a></li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#aboutme">About</a> </li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#portfolio">Portfolio</a></li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#service">Service</a> </li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#testimonial">Testimonial</a></li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#blog">Blog</a> </li>
                            <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300" href="#connectme">Contact</a></li>
                        <div class="flex justify-evenly items-center">
                            <li><a class="text-white" href="#" target="_blank"><fa class="text-sm" icon="envelope-open-text" /></a></li>
                            <li><a class="text-white" href="#" target="_blank"><fa class="text-sm" :icon="['fab','instagram']" /></a></li>
                            <li><a class="text-white" href="#" target="_blank"><fa class="text-sm" :icon="['fab','google']" /></a></li>
                            <li><a class="text-white" href="#" target="_blank"><fa class="text-sm" :icon="['fab','facebook-f']" /></a></li>
                        </div>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>

    <slot />
</template>

<script>
    export default{
        data() {
            return {
                scrolledNav: null,
                mobile: false,
                mobileNav: false,
                windowWidth: null,
            }
        },
        created(){
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll)
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav;
            },
            updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 50){
                    this.scrolledNav = true;
                    return;
                }
                this.scrolledNav = false;
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 991){
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
            }
        },
    }
</script>


<style>

li:hover a{
    color: #45BEB7;
    transition: .6s ease all;
}
li a::before{
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: -3px;
    transition: width .6s cubic-bezier(.25,.8,.25,1) 0s;
    background: #45BEB7;
}
li:hover a::before{
    width: 100%;
    left: 0;
    right: auto;
    bottom: -3px;
}
a.router-link-exact-active {
    color: #45BEB7 !important;
}
.scrolled-nav{
    background-color: #3c3c3c;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    height: 100px;
    z-index: 999;
    right: 0;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition:  1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
@media(min-widht: 1140px){
    .link{
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
    }
    .link:hover{
        color: #fff;
        border-color: #fff;
    }
}
</style>
