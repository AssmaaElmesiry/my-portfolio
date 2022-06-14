<template>
    <section class="MySkills">
        <div class="container mx-auto px-4">
            <div class="title">
                <h2>My Skills</h2>
            </div>
            <div class="row">
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="html" :icon="['fab','html5']" />
                        <h2> Html </h2>
                        <k-progress :percent="100" color="#e54c21" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="css" :icon="['fab','css3-alt']" />
                        <h2> Css </h2>
                        <k-progress :percent="100" color="#248cc9" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="sass" :icon="['fab','sass']" />
                        <h2>Sass</h2>
                        <k-progress :percent="100" color="#ce679a" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="js" :icon="['fab','js']" />
                        <h2>Js</h2>
                        <k-progress :percent="70" color="#f7e018" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="bootstrap" :icon="['fab','bootstrap']" />
                        <h2>Bootstrap</h2>
                        <k-progress :percent="100" color="#9466dc" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="col-md-3 item">
                    <div class="mask">
                        <fa class="vue" :icon="['fab','vuejs']" />
                        <h2>vuejs</h2>
                        <k-progress :percent="80" color="#3fb984" :show-text="false"></k-progress>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data() {
        return {
        }
    },
}
</script>
<style>
.MySkills{
    background-color: #3c3c3c;
}
.MySkills .item{
    padding-bottom: 25px;
}
.MySkills .title{
    padding: 25px 0;
}
.MySkills .title h2{
    color: #fff;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
}
.MySkills .mask{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.MySkills .mask h2{
    text-align: center;
    color: #b6b2bf;
    padding-bottom: 5px;
}
.MySkills .mask svg{
    font-size: 75px;
    padding-bottom:  5px;
}
.MySkills .mask .k-progress{
    display: flex;
    justify-content: center;
}
.MySkills .mask .html{
    color: #e54c21;
}
.MySkills .mask .css{
    color: #248cc9;
}
.MySkills .mask .sass{
    color: #ce679a;
}
.MySkills .mask .js{
    color: #f7e018;
}
.MySkills .mask .bootstrap{
    color: #9466dc;
}
.MySkills .mask .vue{
    color: #3fb984;
}
</style>