<template>
      <footer class="footer center">
            <div class="footer__logo">
                <router-link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
                    </svg>
                </router-link>
                <router-link to='/' class="footer__logo__name">Interno</router-link>
                <p class="footer__logo__text">It is a long established fact that a reader will be distracted lookings.</p>
                <img class="footer__logo__twitter" src="@/assets/img/footer1.svg" alt="twitter">
                <img src="@/assets/img/footer2.svg" alt="in">
            </div>
            <div class="footer__menu">
                <h3 class="footer__menu__title">Pages</h3>
                <router-link to='/' class="footer__menu__nav">Home</router-link>
                <router-link to='/projectpage' class="footer__menu__nav">Project</router-link>
                <router-link to='/blogpage' class="footer__menu__nav">Blog</router-link>
            </div>
            <div class="footer__contacts">
                <h3 class="footer__contacts__title">Contacts</h3>
                <div class="footer__contacts__info">
                    <p class="footer__contacts__adress">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p class="footer__contacts__email">contact@interno.com</p>
                    <p class="footer__contacts__tel">(123) 456 - 7890</p>
            </div>
            </div>
        </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>