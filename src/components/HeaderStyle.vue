<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <div class="container">
            <div class="logo">
                <img src="../assets/logo.png"/>
            </div>
            <nav>
                <ul v-show="!mobile" class="navigation">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="#aboutme">About</a> </li>
                    <li> <a href="#portfolio">Portfolio</a></li>
                    <li> <a href="#service">Service</a> </li>
                    <li> <a href="#testimonial">Testimonial</a></li>
                    <li> <a href="#blog">Blog</a> </li>
                    <li> <a href="#connectme">Contact</a></li>
                </ul>
                <div class="icon">
                    <fa icon="bars" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}" />
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <div class="logo">
                            <img src="../assets/logo.png"/>
                        </div>
                            <li> <a href="/">Home</a></li>
                            <li> <a href="#aboutme">About</a> </li>
                            <li> <a href="#portfolio">Portfolio</a></li>
                            <li> <a href="#service">Service</a> </li>
                            <li> <a href="#testimonial">Testimonial</a></li>
                            <li> <a href="#blog">Blog</a> </li>
                            <li> <a href="#connectme">Contact</a></li>
                        <div class="social">
                            <li><a href="#" target="_blank"><fa icon="envelope-open-text" /></a></li>
                            <li><a href="#" target="_blank"><fa :icon="['fab','instagram']" /></a></li>
                            <li><a href="#" target="_blank"><fa :icon="['fab','google']" /></a></li>
                            <li><a href="#" target="_blank"><fa :icon="['fab','facebook-f']" /></a></li>
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
header .container{
    display: flex;
}
header {
    z-index: 99;
    width: 100%;
    height: auto;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    padding: 20px 0;
}
header .logo{
    display: flex;
}
header .logo img{
    max-width: 120px;
}
header nav{
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    transition: .5s ease all;
    margin: 0 auto;
}
header nav .navigation{
    display: flex;
    list-style: none;
    justify-content: space-around;
    flex-grow: 0.5;
}
header nav .navigation li a{
    color: #fff;
    font-size: 20px;
    transition: .5s ease all;
}
header nav .navigation li:hover a{
    color: #ea4343;
    transition: .5s ease all;
}
header nav .social{
    display: flex;
    flex-grow: 0.2;
    justify-content: space-evenly;
    align-items: center;
}
header nav .social li a {
    color: #000;
}
header nav .social li svg{
    font-size: 18px;
}
header nav a.router-link-exact-active {
    color: #ea4343 !important;
}
/* .icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 24px;
    height: 100%;
}
.icon svg{
    cursor: pointer;
    transition: .8s ease all;
}
.icon-active{
    transform: rotate(270deg);
} */
header nav .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #333232;
    top: 0;
    left: 0;
    padding: 25px !important;
    text-align: center;
}
header nav .dropdown-nav .logo{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
header nav .dropdown-nav .logo img{
    width: 30%;
}
header nav .dropdown-nav li{
    margin-left: 0;
    padding: 15px 0 !important;
}
header nav .dropdown-nav li a{
    color: #fff;
    font-weight: bold;
    transition: .5s ease all;
}
header nav .dropdown-nav li a:hover{
    color: #ea4343;
    transition: .5s ease all;
}
header nav .dropdown-nav li .link{
    color: #000;
}
.scrolled-nav{
    background-color: #3c3c3c;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    height: 100px;
    z-index: 99999999999999999;
    right: 0;
}
.scrolled-nav nav{
    padding: 8px 0;
}
.scrolled-nav .logo img{
    width: auto;

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

@media(max-width: 991px){
    .buttom{
        width: 100%;
        display: flex;
        justify-content: center;
        align-self: center;
    }
}
</style>
