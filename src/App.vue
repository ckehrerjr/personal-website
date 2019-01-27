<template>
  <div class="l-grid__container">
    <app-header></app-header>
    <app-about></app-about>
    <app-portfolio></app-portfolio>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './Components/Header.vue';
import Footer from './Components/Footer.vue';
import About from './Components/About.vue';
import Portfolio from './Components/Portfolio.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-about': About,
        'app-portfolio': Portfolio
    }
}

</script>
