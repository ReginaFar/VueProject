<template>
    <HeaderComponent></HeaderComponent>
    <div class="not__found">
        <div class="not__found__left">
            <h1 class="not__found__left__title">404</h1>
            <p class="not__found__left__text">We are sorry, but the page you requested was not found</p>
            <router-link to='/'>
                <button class="not__found__left__button">Back To Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>
        <div class="not__found__right">
            <img class="not__found__right__img" src="@/assets/img/404.png" alt="404">
        </div>
        
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

    export default {
    components: { HeaderComponent }
}
</script>

