<template>
     <div class="blogpage">
       <HeaderComponent></HeaderComponent>
        <div class="top">
            <img class="top__img" src="@/assets/img/blog__top.png" alt="blog__top">
            <div class="top__heading">
                <h1 class="top__title">Articles & News</h1>
                <div class="top__breadcrumps">
                    <router-link to='/'>Home</router-link>
                    <p>/</p>
                    <router-link to='/blogpage'>Blog</router-link>
                </div>
            </div>
        </div>
        <article class="post center">
            <h1 class="post__heading">Latest Post</h1>
            <div class="post__box">
                <div class="post__box__left">
                    <img class="post__box__left__img" src="@/assets/img/post.png" alt="post">
                </div>
                <div class="post__box__right">
                    <h3 class="post__box__right__title">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="post__box__right__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                    <br>
                    <br>
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    <div class="post__box__right__bottom">
                        <p class="post__box__right__date">26 December,2022</p>
                        <router-link to='/projectpage'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </div>
                </div>     
            </div>
        </article>
        <section class="news center">
            <h2 class="news__heading">Articles & News</h2>
            <article class="news__articles" id="articles">
                <router-link to='/blogdetails' class="news__article" v-for="article in articlesData" :key="article.id">
                    <img :src="article.src" :alt="article.alt" class="news__article__img">
                    <p class="news__article__design">{{article.design}}</p>
                    <h3 class="news__article__heading">{{article.heading}}</h3>
                    <div class="news__article__bottom">
                        <p class="news__article__date">{{article.date}}</p>
                        <div class="news__article__bottom__button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                            fill="none">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </router-link>
            </article>  
            <PaginationComponent></PaginationComponent>
        </section>
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
                articlesData: [
                { id: 1, src: require("@/assets/img/article1.png"), alt: "interior", design: "Kitchen Design", heading: "Let’s Get Solution For Building Construction Work", date: "26 December,2022" },
                { id: 2, src: require("@/assets/img/article2.png"), alt: "interior", design: "Living Design", heading: "Low Cost LatesInvented Interior Designing Ideas.", date: "22 December,2022" },
                { id: 3, src: require("@/assets/img/article3.png"), alt: "interior", design: "Interior Design", heading: "Best For AnOffice & Business Interior Solution", date: "25 December,2022" },
                { id: 4, src: require("@/assets/img/article4.png"), alt: "interior", design: "Kitchen Design", heading: "Let’s Get Solution For Building Construction Work", date: "26 December,2022" },
                { id: 5, src: require("@/assets/img/article5.png"), alt: "interior", design: "Living Design", heading: "Low Cost LatesInvented Interior Designing Ideas.", date: "22 December,2022" },
                { id: 6, src: require("@/assets/img/article6.png"), alt: "interior", design: "Interior Design", heading: "Best For AnOffice & Business Interior Solution", date: "25 December,2022" },
                ]
            }
        },
        components: { HeaderComponent, FooterComponent, PaginationComponent }
    }
</script>
