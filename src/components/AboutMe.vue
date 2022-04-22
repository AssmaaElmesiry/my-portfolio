<template>
<section class="AboutMe">
    <div class="container">
        <div class="mask row">
            <div class="left col-md-4">
                <img src="../assets/Aboutright.png" />
            </div>
            <div class="info col-md-4">
                <div class="title">
                    <span>About Me</span>
                    <h2>I'm <span>Assmaa</span></h2>
                    <h1>Web <span>Designer</span></h1>
                    <p>Based in London,UK</p>
                </div>
                <div class="disc">
                    <p>Hi! My name is Aali Walker. I am UI/UX designer, and I'm very passionate and dedicated to my work.</p>
                    <p>With 20 years experience as a professional graphic designer and web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                </div>
                <div class="download">
                    <mainbutton class="mainbutton"> Download CV <fa icon="download" /></mainbutton>
                </div>
            </div>
            <div class="right col-md-4">
                <img src="../assets/Aboutleft.jpg" />
            </div>
        </div>
    </div>
</section>
</template>
<script>
import mainbutton from './ButtonStyle/mainbutton.vue'
export default{
    components: {
        mainbutton,
    }
}
</script>

<style scoped>
.AboutMe{
    padding: 150px 0;
    background-color: #3c3c3c;
}
.AboutMe .mask{
    display: flex;
    justify-content: space-between;
    height: 100vh;
}
.AboutMe .mask .right,.AboutMe .mask .left{
    position: relative;
}
.AboutMe .mask .right{
    align-self: flex-end;
}
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
    border: 4px solid #ea4343;
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
    background-color: #ea4343;
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
.AboutMe .mask .info{
    align-self: center;
}
.AboutMe .mask .info .title span{
    color: #ea4343;
    font-size: 18px;
}
.AboutMe .mask .info .title h2, .AboutMe .mask .info .title h1{
    font-size: 40px;
    color: #fff;
}
.AboutMe .mask .info .title h2 span,.AboutMe .mask .info .title h1 span{
    font-size: 40px;
    color: #ea4343;
    font-weight: bold;
}
.AboutMe .mask .info .title p {
    color: #fff;
    font-size: 25px;
}
.AboutMe .mask .info .disc p{
    color: #b6b2bf;
}
.AboutMe .mask .info .download{
    display: flex;
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
}
</style>