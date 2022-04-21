<template>
    <section class="intro">
        <div class="container">
            <div class="mask">
                <div class="content">
                    <P>Hello, I'm</P>
                    <h1>Assmaa</h1>
                    <h2> Creative <VueWriter :array="arr" /></h2>
                    <div class="buttons">
                        <mainbutton class="mainbutton"> Say Hello <fa icon="envelope-open-text" /></mainbutton>
                        <a href="#" class="about">About Me</a>
                    </div>
                </div>
                <kinesis-container class="kinesis-container">
                    <kinesis-element :strength="30" class="kinesis-item">
                        <div class="images">
                            <img src="../assets/avatar.png" />
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item2">
                        <div class="bgimage">
                            <div></div>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="80" class="kinesis-item3">
                        <div class="bgimage">
                            <div></div>
                        </div>
                    </kinesis-element>
                    <kinesis-element :strength="50" class="kinesis-item4">
                        <div class="bgimage">
                            <div></div>
                        </div>
                    </kinesis-element>
                </kinesis-container>
                <ul class="social">
                    <li><a href="#"><fa icon="envelope-open-text" /></a></li>
                    <li><a href="#"><fa :icon="['fab','instagram']" /></a></li>
                    <li><a href="#"><fa :icon="['fab','google']" /></a></li>
                    <li><a href="#"><fa :icon="['fab','facebook-f']" /></a></li>
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
            arr: [" Designer ", " Developer ", " Freelancer"]
        }
    },
    components: {
        VueWriter,
        mainbutton,
        KinesisContainer,
        KinesisElement

    },
}
</script>
<style scoped>
.intro{
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #333232;
}
.intro .mask{
    width: 100%;
    height: 100vh;
    position: relative;
}
.intro .mask .content{
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}
.intro .mask .content p{
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}
.intro .mask .content h1{
    color: #ea4343;
    font-size: 60px;
    font-weight: bold;
}
.intro .mask .content h2{
    display: flex;
    align-items: end;
    color: #fff;
}
.intro .mask .content .buttons{
    display: flex;
    align-items: center;
    margin-top: 35px;
}
.intro .mask .content .buttons  svg {
    padding-left: 15px;
}
.intro .mask .content .buttons .about{
  color: #fff;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  transition: all .3s ease;
  margin-left: 25px;
}
.intro .mask .content .buttons .about::before{
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
.intro .mask .content .buttons .about:hover::before{
    width: 100%;
    left: 0;
    right: auto;
    bottom: -3px;
}
.intro .mask .images{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 37%;
    z-index: 1;
}
.intro .mask .images img{
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.intro .mask .social{
    position: fixed;
    left: 20px;
    top: 50%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.intro .mask .social svg{
    color: #fff;
    font-size: 20px;
    transition: all .3s ease;
}
.intro .mask .social svg:hover{
    color: #ea4343;
    transition: all .3s ease;
}
/* Style About Kinesis Animation */
.intro .mask .kinesis-container {
    width: 100%;
    height: 100%;
    display: flex;
}
.intro .mask .kinesis-container .kinesis-item{
    width: 100%;
    height: 100%;
}
.intro .mask .kinesis-container .kinesis-item2{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
.intro .mask .kinesis-container  .kinesis-item2 .bgimage{
  width: 100%;
  height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item2 .bgimage div{
    position: relative;
    width: 100%;
    height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item2 .bgimage div:before{
    content: "";
    border: 6px solid #ea4343;
    width: 35%;
    height: 35%;
    position: absolute;
    top: 34%;
    right: 95px;
}
.intro .mask .kinesis-container .kinesis-item3{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
.intro .mask .kinesis-container  .kinesis-item3 .bgimage{
  width: 100%;
  height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item3 .bgimage div{
    position: relative;
    width: 100%;
    height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item3 .bgimage div:before{
    content: "";
    background-color: #ea4343;
    width: 26%;
    height: 70%;
    position: absolute;
    top: 18%;
    right: -30px;
}
.intro .mask .kinesis-container .kinesis-item4{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
.intro .mask .kinesis-container  .kinesis-item4 .bgimage{
  width: 100%;
  height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item4 .bgimage div{
    position: relative;
    width: 100%;
    height: 100%;
}
.intro .mask .kinesis-container  .kinesis-item4 .bgimage div:before{
    content: "";
    border: 6px solid #fff;
    width: 11%;
    height: 18%;
    position: absolute;
    top: 10%;
    right: -74px;
}
/* Style About Vue Writer */
.intro .mask .content h2 .is-typed {
  color: #fff !important;
  padding-left: 10px;
  font-size: 40px;

}
.intro .mask .content h2 .is-typed >span{
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