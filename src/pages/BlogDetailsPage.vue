<template>
   <div class="blogdetailspage">
        <HeaderComponent></HeaderComponent>
        <div class="blog-details__top">
            <img class="blog-details__top__img" src="@/assets/img/blog-details__top.png" alt="blog-details__top">
        </div>
        <div class="blog-details__main center" id="article__sort">
            <section v-for="sortedArticle in sortedArticles" :key="sortedArticle.id" class="kitchen__design">
                <h2 class="kitchen__design__title">{{sortedArticle.title}}</h2>
                <img :src="sortedArticle.src1" :alt="sortedArticle.alt1" class="kitchen__design__img">
                <div class="kitchen__design__info">
                    <p class="kitchen__design__date">{{sortedArticle.date}}</p>
                    <ul class="kitchen__design__breadcrumbs">
                        <li><router-link to='*'>Interior</router-link></li>
                        <li><router-link to='/'>Home</router-link></li>
                        <li><router-link to='*'>Decore</router-link></li>
                    </ul>
                </div>
                <p class="kitchen__design__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. <br> <br>
                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <aside class="kitchen__design__quote">
                    <img src="@/assets/img/kitchen__design__quote.svg" alt="kitchen__design__quote" class="kitchen__design__quote__img">
                    <p class="kitchen__design__quote__text">The details are not the details. They make the design.</p>
                </aside>
                <h2 class="kitchen__design__title">Design sprints are great</h2>
                <p class="kitchen__design__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ul class="kitchen__design__ul">
                    <li><span class="kitchen__design__ul__num">1</span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li><span class="kitchen__design__ul__num">2</span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li><span class="kitchen__design__ul__num">3</span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ul>
                <img :src="sortedArticle.src2" :alt="sortedArticle.alt2" class="kitchen__design__img__bottom">
                <p class="kitchen__design__text bottom">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </section>
            <section class="blog-details__main__tags">
                <h3 class="blog-details__main__title">Tags</h3>
                <div class="blog-details__main__links">
                    <button v-for="button in buttons"  @click="changeBlogArticles(button.id)" class="blog-details__main__link">{{button.text}}</button>
                </div>
            </section>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    export default {
        data() {
            return {
                sortedArticles: [
                    { id: "0", title: "Let’s Get Solution for Building Construction Work", src1: require("@/assets/img/kitchenDesign.png"), alt1: "kitchen__design", date: "26 December,2022", src2: require("@/assets/img/kitchenDesignBottom.png"), alt2: "kitchen__design__bottom" }
                ],
                articles: [
                    { id: "0", title: "Let’s Get Solution for Building Construction Work", src1: require("@/assets/img/kitchenDesign.png"), alt1: "kitchen__design", date: "26 December,2022", src2: require("@/assets/img/kitchenDesignBottom.png"), alt2: "kitchen__design__bottom" },
                    { id: "1", title: "How to choose a bedroom design in 2023?", src1: require("@/assets/img/bedroomDesign.jpg"), alt: "bedroom__design", date: "27 December,2022", src2: require("@/assets/img/bedroomDesignBottom.webp"), alt2: "bedroom__design__bottom" },
                    { id: "2", title: "Modern building design ideas", src1: require("@/assets/img/buildingDesign.jpg"), alt: "building__design", date: "28 December,2022", src2: require("@/assets/img/buildingDesignBottom.jpg"), alt2: "building__design__bottom" },
                    { id: "3", title: "Architecture design: Unraveling the techniques and tools", src1: require("@/assets/img/architectureDesign.webp"), alt: "architecture__design", date: "29 December,2022", src2: require("@/assets/img/architectureDesignBottom.jpg"), alt2: "" },
                    { id: "4", title: "Designing a kitchen: the ultimate guide to planning a kitchen", src1: require("@/assets/img/kitchenPlanning.webp"), alt: "kitchen__planning", date: "24 December,2022", src2: require("@/assets/img/kitchenPlanningBottom.jpg"), alt2: "kitchen__planning__bottom" },
                    { id: "5", title: "Bathroom ideas to inspire a refresh", src1: require("@/assets/img/bathroomDesign.webp"), alt: "bathroom__design", date: "23 December,2022", src2: require("@/assets/img/bathroomDesignBottom.jpg"), alt2: "bathroom__design__bottom" }
                ],
                buttons: [
                    { id: "0", text: "Kitchen" },
                    { id: "1", text: "Bedroom" },
                    { id: "2", text: "Building" },
                    { id: "3", text: "Architecture" },
                    { id: "4", text: "Kitchen Planning" },
                    { id: "5", text: "Bathroom" }
                ],
            }
        },
        methods: {
            changeBlogArticles(id){
            this.sortedArticles = this.articles.filter((el) => el.id === id);
            }
        },
        components: { HeaderComponent,FooterComponent }
    }
</script>

