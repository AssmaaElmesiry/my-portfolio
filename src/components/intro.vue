<template>
    <section class="intro">
        <div class="container">
            <div class="mask">
                <div class="content">
                    <P>Hello, I'm</P>
                    <h1>Assmaa</h1>
                   <h2> Creative <VueWriter :array="arr" /></h2>
                   <div class="buttons">
                        <mainbutton> Say Hello <fa icon="envelope-open-text" /></mainbutton>
                        <a href="#" class="about">About Me</a>
                   </div>
                </div>
                <div class="images">
                    <img src="../assets/avatar.png" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
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
.intro .mask .content .buttons .mainbutton svg {
    padding-left: 15px;
}
.intro .mask .content .buttons .about{
  color: #fff;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  transition: all .3s ease;
  padding-left: 25px;
}
.intro .mask .content .buttons .about::before{
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: 3px;
    transition: width .6s cubic-bezier(.25,.8,.25,1) 0s;
    background: #fff;
}
.intro .mask .content .buttons .about:hover::before{
    width: 100%;
    left: 0;
    right: auto;
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
/* Style About Vue Writer */
.intro .mask .content h2 .is-typed {
  color: #fff !important;
  padding-left: 10px;
  font-size: 40px;

}
.intro .mask .content h2 .is-typed >span{
  font-weight: bold !important;
}
</style>