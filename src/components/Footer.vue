<template>
    <section class="bg-bgHeader container mx-auto px-4 pt-32 pb-16">
        <div class="flex justify-center items-center">
            <img src="../assets/logo.png" />
            <div v-for="item in icons" :key="item">
                <fa :icon="['fab','item.icon']"/>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data() {
        return {
            icons:[
                {icon:'linkedin-in'},
                {icon:'google-plus-g'},
                {icon:'whatsapp'},
                {icon:'facebook-f'},
                {icon:'twitter'},
                {icon:'phone'},
            ]
        }
    },
}
</script>
