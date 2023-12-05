<template>
      <div class="project">
        <HeaderComponent></HeaderComponent>
        <div class="top">
            <img class="top__img" src="@/assets/img/project__top.png" alt="blog__top">
            <div class="top__heading">
                <h1 class="top__title">Our project</h1>
                <div class="top__breadcrumps">
                    <router-link to='/'>Home</router-link>
                    <p>/</p>
                    <router-link to='/projectpage'>Project</router-link>
                </div>
            </div>
        </div>
        <div class="project__main center">
            <div class="project__main__filter" >
                <button v-for="(projectButton,index) in projectButtons" :key="index" @click="changeProjectArticles(projectButton.id)" class="project__main__filter__button">{{ projectButton.text }}</button>
            </div>
            <div class="project__main__designs">
                <article v-for="(sortedProjectArticle,index) in sortedProjectArticles" :key="index" class="project__main__design">
                    <img class="project__main__design__img" :src="sortedProjectArticle.src" :alt="sortedProjectArticle.alt">
                    <svg class="project__main__design__svg" @click="clickstarlike" xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                        <g filter="url(#filter0_d_993_156)">
                        <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#FFF"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                    <div class="project__main__design__description">
                        <div class="project__main__design__info">
                            <h3 class="project__main__design__title">{{sortedProjectArticle.title }}</h3>
                            <div class="project__main__design__breadcrumbs">
                                <router-link to='*'>Decor</router-link>
                                <p>/</p>
                                <router-link to='*'>Architecture</router-link>
                            </div>
                        </div>
                        <router-link to='/projectdetails'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </div>
                </article>
            </div>
            <PaginationComponent></PaginationComponent>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import PaginationComponent from '@/components/PaginationComponent.vue';
    export default {
        data() {
            return {
                projectButtons: [
                    { id: "Bathroom", text: "Bathroom" },
                    { id: "Bedroom", text: "Bedroom" },
                    { id: "Kitchen", text: "Kitchen" },
                    { id: "Living Area", text: "Living Area" },
                ],
                projectArticles: [
                    {id: "Bathroom", src: require("@/assets/img/bathroom1.jpg"), alt: "bathroom", title: "Minimal Bathroom"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom2.jpg"), alt: "bathroom", title: "Classical Minimal Bathroom"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom3.jpg"), alt: "bathroom", title: "Minimal Bathroom Design"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom4.jpeg"), alt: "bathroom", title: "Modern Bathroom"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom5.jpg"), alt: "bathroom", title: "Minimal Bathroom"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom6.jpg"), alt: "bathroom", title: "Modern Bathroom"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom7.jpg"), alt: "bathroom", title: "Minimal Bathroom Design"},
                    {id: "Bathroom", src: require("@/assets/img/bathroom8.jpg"), alt: "bathroom", title: "Modern Bathroom"},

                    {id: "Bedroom", src: require("@/assets/img/projectDesign1.png"), alt: "bedroom", title: "Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign3.png"), alt: "bedroom", title: "Classical Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign5.png"), alt: "bedroom", title: "Minimal Bedroom table"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign7.png"), alt: "bedroom", title: "Modern Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign2.png"), alt: "bedroom", title: "Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign4.png"), alt: "bedroom", title: "Modern Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign6.png"), alt: "bedroom", title: "System Table"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign8.png"), alt: "bedroom", title: "Modern Bedroom"},

                    {id: "Kitchen", src: require("@/assets/img/kitchen1.jpg"), alt: "kitchen", title: "Minimal Kitchen"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen2.jpg"), alt: "kitchen", title: "Classical Minimal Kitchen"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen3.jpg"), alt: "kitchen", title: "Minimal Kitchen Design"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen4.jpg"), alt: "kitchen", title: "Modern Kitchen"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen5.jpg"), alt: "kitchen", title: "Minimal Kitchen"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen6.webp"), alt: "kitchen", title: "Modern Kitchen"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen7.webp"), alt: "kitchen", title: "Minimal Kitchen Design"},
                    {id: "Kitchen", src: require("@/assets/img/kitchen8.jpg"), alt: "kitchen", title: "Modern Kitchen"},

                    {id: "Living Area", src: require("@/assets/img/la1.jpg"), alt: "living area", title: "Minimal Living Area"},
                    {id: "Living Area", src: require("@/assets/img/la2.jpg"), alt: "living area", title: "Classical Living Area"},
                    {id: "Living Area", src: require("@/assets/img/la3.jpg"), alt: "living area", title: "Living Area Design"},
                    {id: "Living Area", src: require("@/assets/img/la4.jpg"), alt: "living area", title: "Modern Living Area"},
                    {id: "Living Area", src: require("@/assets/img/la5.jpg"), alt: "living area", title: "Minimal Living Area"},
                    {id: "Living Area", src: require("@/assets/img/la6.jpg"), alt: "living area", title: "Living Area Design"},
                    {id: "Living Area", src: require("@/assets/img/la7.jpg"), alt: "living area", title: "Modern Living Area"},
                    {id: "Living Area", src: require("@/assets/img/la8.jpg"), alt: "living area", title: "Minimal Living Area"}
                ],
                sortedProjectArticles: [
                    {id: "Bedroom", src: require("@/assets/img/projectDesign1.png"), alt: "bedroom", title: "Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign3.png"), alt: "bedroom", title: "Classical Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign5.png"), alt: "bedroom", title: "Minimal Bedroom table"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign7.png"), alt: "bedroom", title: "Modern Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign2.png"), alt: "bedroom", title: "Minimal Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign4.png"), alt: "bedroom", title: "Modern Bedroom"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign6.png"), alt: "bedroom", title: "System Table"},
                    {id: "Bedroom", src: require("@/assets/img/projectDesign8.png"), alt: "bedroom", title: "Modern Bedroom"}
                ],
            }
        },
        methods: {
            changeProjectArticles(id) {
                this.sortedProjectArticles = this.projectArticles.filter((el) => el.id === id);
            },
      
            changeColorSvg(){
                this.svgColorBase='rgb(255, 169, 40)';
            },
            clickstarlike(event) {
                const element = event.target;
                const parent = element.parentElement;
                const path = parent.getElementsByTagName('path');
                if (path[0].style.fill === ""){
                    path[0].style.fill = "#FFA928";
                } else {
                    path[0].style.fill = "";
                }
            }
        },
        components: { HeaderComponent, FooterComponent, PaginationComponent }
    }
</script>
