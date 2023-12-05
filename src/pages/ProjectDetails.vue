<template>
    <div class="project__details">
        <HeaderComponent></HeaderComponent>
        <section class="project__details__top">
            <img src="@/assets/img/project_details_top.jpg" alt="project_details_top" class="project__details__top__img">
        </section>
        <section class="project__details__content center">
            <div class="project__details__info">
                <h2 class="project__details__info__title">{{ title }}</h2>
                <p class="project__details__info__text">{{ upperText }}</p> <br>
                <p class="project__details__info__text">{{ bottomText }}</p>
            </div>
        </section>
        <ProjectDetailsSlider class="project__details__slider"></ProjectDetailsSlider>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import ProjectDetailsSlider from '../components/ProjectDetailsSlider.vue';
    import { mapState } from 'vuex';

    export default {
        computed:{
            ...mapState(['title','upperText','bottomText'])
        },
        components: { HeaderComponent, FooterComponent,ProjectDetailsSlider }
    }
</script>

<style scoped>

</style>