<template>
<section class="AboutMe" id="aboutme">
    <div class="container">
        <div class="mask row">
            <div class="col-md-3">
                <div class="myphoto">
                    <div class="right"></div>
                    <img src="../assets/pic (2).jpg" alt="porfile pic" />
                    <div class="left"></div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="info">
                    <div class="title">
                        <span>About Me</span>
                        <h2>I'm <span>Assmaa</span></h2>
                        <h1>Web <span>Designer</span></h1>
                    </div>
                    <div class="disc">
                        <p>Hi! My name is Aali Walker.  front-end web developer is responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do. </p>
                    </div>
                    <ul class="information">
                        <li v-for="(value, key) in myInformation" :key="(value, key)">
                            <fa :icon="['fa',value.icon]"/>
                            <span> {{ key }}</span>
                            <p> {{ value.info }} </p>
                        </li> 
                    </ul>
                </div>
            </div>
            <div class="col-md-12  myInterests">
                <h2>My Interests</h2>
                <ul class="interests">
                    <li v-for="value in myInterests" :key="value">
                        <fa :icon="['fas',value.icon]"/>
                        {{value.item}}
                    </li>
                </ul>
            </div>
            <div class="download">
                <mainbutton class="mainbutton"> Download CV <fa icon="download" /></mainbutton>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import mainbutton from './ButtonStyle/mainbutton.vue'
export default{
    data() {
        return {
            myInformation:{
                Name:{
                    info:'Assmaa El-Mesiry',
                    icon:'user'
                },
                Phone:{
                    info: '01555209247',
                    icon:'phone'
                },
                Email:{
                    info: 'assmaaelmesiry@gmail.com',
                    icon:'envelope-open-text'
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
    }
}
</script>

<style scoped>
.AboutMe{
    padding: 100px 0;
    background-color: #3c3c3c;
    height: 100%;
}
.AboutMe .mask{
    display: flex;
    justify-content: space-between;
}
.AboutMe .mask .myphoto{
    width: 100%;
    position: relative;
}
.AboutMe .mask .myphoto .right:before{
    position: absolute;
    content: "";
    width: 2px;
    height: 90px;
    background-color: #45BEB7;
    left: -15px;
    top: -10px;
}
.AboutMe .mask .myphoto .right:after{
    position: absolute;
    content: "";
    width: 90px;
    height: 2px;
    background-color: #45BEB7;
    left: -15px;
    top: -12px;
}
.AboutMe .mask .myphoto .left:before{
    position: absolute;
    content: "";
    width: 2px;
    height: 90px;
    background-color: #45BEB7;
    right: -15px;
    bottom: -10px;
}
.AboutMe .mask .myphoto .left:after{
    position: absolute;
    content: "";
    width: 90px;
    height: 2px;
    background-color: #45BEB7;
    right: -15px;
    bottom: -12px;
}
.AboutMe .mask .myphoto img{
    width: 100%;
    height: 100%;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
.AboutMe .mask .info{
    align-self: center;
}
.AboutMe .mask .info .title span{
    color: #45BEB7;
    font-size: 18px;
}
.AboutMe .mask .info .title h2, .AboutMe .mask .info .title h1{
    font-size: 40px;
    color: #fff;
}
.AboutMe .mask .info .title h2 span,.AboutMe .mask .info .title h1 span{
    font-size: 40px;
    color: #45BEB7;
    font-weight: bold;
}
.AboutMe .mask .info .title p {
    color: #fff;
    font-size: 25px;
}
.AboutMe .mask .info .disc p{
    color: #b6b2bf;
}
.AboutMe .mask .info .information li{
    display: flex;
    align-items: baseline;
    color: #b6b2bf;
    font-size: 17px;
}
.AboutMe .mask .info .information li span{
    font-weight: bold;
    position: relative;
    padding: 0 50px 0 20px;
}
.AboutMe .mask .info .information li p{
    position: relative;
}
.AboutMe .mask .info .information li p::before{
    position: absolute;
    content: ":";
    top: 0;
    left: -25px;
    color: #45BEB7;
}
.AboutMe .mask .info .information li svg{
    color: #45BEB7;
}
.AboutMe .mask .download{
    display: flex;
    justify-content: center;
    margin-top: 70px;
}
.myInterests{
    padding-top: 40px;
}
.myInterests h2{
    color: #fff;
    padding-bottom: 15px;
}
.AboutMe .mask .interests{
    display: flex;
    justify-content: space-between;
}
.AboutMe .mask .interests li {
    font-size: 25px;
    display: flex;
    flex-direction: column;
    color: #fff;
}
.AboutMe .mask .interests svg{
    color: #45BEB7;
    font-size: 50px;
    padding-bottom: 5px;
}
/*
.AboutMe .mask .right::before{
    content: "";
    background-color: #fff;
    position: absolute;
    top: -60px;
    right: -40px;
    width: 150px;
    height: 150px;
    border-radius: 25px;
    animation-name: my-animation-6cb1b4f6;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.AboutMe .mask .right::after{
    content: "";
    border: 4px solid #45BEB7;
    position: absolute;
    bottom: -60px;
    left: -40px;
    width: 150px;
    height: 150px;
    border-radius: 25px;
    animation-name: my-animation3;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.AboutMe .mask .left:before{
    content: "";
    position: absolute;
    width: 250px;
    background-color: #45BEB7;
    height: 250px;
    left: -53px;
    top: 15%;
    border-radius: 25px;
    animation-name: my-animation2;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.AboutMe .mask .left::after{
    content: "";
    position: absolute;
    width: 150px;
    border: 6px solid #fff;
    height: 150px;
    right: 30px;
    top: -30px;
    border-radius: 25px;
    animation-name: my-animation-6cb1b4f6;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.AboutMe .mask .left img,.AboutMe .mask .right img {
    width: 100%;
    height: auto;
    border-radius: 25px;
    z-index: 1;
}




@keyframes my-animation {
  from {
    width: 250px;
  }
  to {
    width: 150px;
  }
}
@keyframes my-animation2 {
  from {
    top: 20%;
  }
  to {
      top: 30%;
  }
}
@keyframes my-animation3 {
  from {
    top: 40%;
  }
  to {
      top: 60%;
  }
} */
</style>