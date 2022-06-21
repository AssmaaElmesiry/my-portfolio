<template>
    <section class="Projects" id="portfolio">
        <div class="container mx-auto sm:px-6 px-4">
            <div class="title py-6">
                <h2 class="text-white text-center text-5xl font-bold">Projects</h2>
            </div>
            <PortfolioFilterVue/>
        </div>
    </section>
</template>
<script>
import PortfolioFilterVue from "./PortfolioFilter.vue";
export default{
    data() {
        return {
            
        }
    },
    components:{
        PortfolioFilterVue,
    }
}
</script>

