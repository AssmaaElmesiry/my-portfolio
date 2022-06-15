<template>
    <section class="bg-bgsection">
        <div class="container mx-auto px-4">
            <div class="title py-6">
                <h2 class="text-white text-center text-5xl font-bold">My Skills</h2>
            </div>
            <div class="flex xl:justify-between items-center sm:flex-wrap sm:flex-row flex-col">
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-html text-6xl" :icon="['fab','html5']" />
                        <h2 class="text-white text-center mb-1 text-gray"> Html </h2>
                        <k-progress :percent="100" color="#e54c21" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-css text-6xl" :icon="['fab','css3-alt']" />
                        <h2 class="text-white text-center mb-1 text-gray"> Css </h2>
                        <k-progress :percent="100" color="#248cc9" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-sass text-6xl" :icon="['fab','sass']" />
                        <h2 class="text-white text-center mb-1 text-gray">Sass</h2>
                        <k-progress :percent="100" color="#ce679a" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-js text-6xl" :icon="['fab','js']" />
                        <h2 class="text-white text-center mb-1 text-gray">Js</h2>
                        <k-progress :percent="70" color="#f7e018" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-bootstrap text-6xl" :icon="['fab','bootstrap']" />
                        <h2 class="text-white text-center mb-1 text-gray">Bootstrap</h2>
                        <k-progress :percent="100" color="#9466dc" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <div class="w-full h-16 flex justify-center items-center"><img class="w-11" :src="tailwind" /></div>
                        <h2 class="text-white text-center mb-1 text-gray">TailwindCss</h2>
                        <k-progress :percent="100" color="#0ea5e9" :show-text="false"></k-progress>
                    </div>
                </div>
                <div class="mb-6 sm:w-1/6 w-full">
                    <div class="flex justify-center flex-col">
                        <fa class="text-vuejs text-6xl" :icon="['fab','vuejs']" />
                        <h2 class="text-white text-center mb-1 text-gray">vuejs</h2>
                        <k-progress :percent="80" color="#3fb984" :show-text="false"></k-progress>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default{
  methods: {
  },
    data() {
        return {
            tailwind: ('../src/assets/tailwind.png'),
        }
    },
}
</script>
<style>
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
.k-progress-outer{
    margin: 0 !important;
    padding: 0 !important;
}
</style>