<template>
    <section class="bg-bgHeader" id="connectme">
        <div class="container mx-auto sm:px-6 px-4 pt-32 pb-16">
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/logo.png" />

                    <div class="flex justify-around w-1/2 mt-7">
                        <div v-for="item in icons" :key="item" class="icon flex justify-center items-center w-12 h-12 rounded-full overflow-hidden text-white border border-solid border-white hover:transform hover:scale-90 hover:bg-mainColor hover:border-mainColor ">
                           <a :href="`${item.link}`" target="_blank"> <fa  :icon="['fab',item.icon]" class="transform translate-x-0 translate-y-0 text-2xl"/></a>
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
            icons:[
                {
                    icon: 'linkedin-in',
                    link: ('https://www.linkedin.com/in/assmaa-el-mesiry-50a5b91b6/'),
                },
                {
                    icon: 'google-plus-g',
                    link: ('assmaaelmesiry@gmail.com'),
                },
                {
                    icon: 'whatsapp',
                    link: ('https://api.whatsapp.com/send?phone=01555209247'),
                },
                {
                    icon: 'twitter',
                    link: ('https://twitter.com/3ss1100'),
                },
                {
                    icon: 'github',
                    link: ('https://github.com/AssmaaElmesiry'),
                },
            ]
        }
    },
}
</script>
<style scoped>
.icon:hover svg{
animation: toBottomFromTop 0.3s forwards;
}
@keyframes toBottomFromTop{
    49% {
        transform: translateY(100%);
    }
    50% {
        opacity: 0;
        transform: translateY(-100%);
    }
    51% {
        opacity: 1;
    }
    100%{
        transform: translateY(0);
    }
}
</style>