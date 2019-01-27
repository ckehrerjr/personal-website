<template>
<div>
  <section id="portfolioSection">
    <h1>Portfolio</h1>
    <carousel :perPage=1 :paginationEnabled=true :paginationActiveColor="'#ffffff '" :paginationSize=15>
      <slide class="c-portfolio" v-for="portfolio in data" :key="portfolio.id"><a :href="portfolio.link" target="_blank"><img class="c-portfolio__img t-background-color-primary" :src="portfolio.imageUrl" :alt="portfolio.title" :title="portfolio.title" /></a>
        <h2 class="c-portfolio__title"><a :href="portfolio.link" target="_blank">{{ portfolio.title }}</a></h2>
        <p class="c-portfolio__description">{{ portfolio.description }}</p>
        <p>{{ portfolio.technologyStack }}</p>
        <p class="c-portfolio__footnote u-strip-margin-top" v-if="portfolio.footnoteDescription.length > 0"><small v-html="portfolio.footnoteDescription"></small></p>
      </slide>
    </carousel>
  </section>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },

  data() {
    return {
      "portfolio": [
          {
              "id": 1,
              "imageUrl": "src/assets/img/portfolio-audi.png",
              "title": "Audi",
              "description": "Responsible for creating a intranet site for delivering numerous programs, and events associated for Audi. The site is build on individual components wiring up the data using an MVVM model.",
              "technologyStack": "Technologies used: Azure, CSS(BEM), HTML5, Javascript, MVVM, Responsive Design, SQL Server, TypeScript",
              "footnoteDescription": "All work created and distributed while working at <a href='http://www.touchstone-group.com/' target='_blank'>Touchstone Group Associates</a>."
          },
          {
              "id": 2,
              "link": "http://business.pods.com/",
              "imageUrl": "src/assets/img/portfolio-pods.jpg",
              "title": "Pods",
              "description": "Helped create a front-end responsive experience, while applying parallax motion interaction.",
              "technologyStack": "Technologies used: CSS(Foundation), HTML5, Javascript",
              "footnoteDescription": "All work created and distributed while working at <a href='http://gyro.com' target='_blank'>gyro</a>."
          },
          {
              "id": 3,
              "link": "https://connxus.com/",
              "imageUrl": "src/assets/img/portfolio-connxus.jpg",
              "title": "ConnXus",
              "description": "A custom front and back-end CMS using Concrete5 blogging platform. Built fully responsive, while applying custom backend templates specific for the customers needs.",
              "technologyStack": "Technologies used: Concrete5 (CMS), CSS, HTML5, Javascript, MySQL, PHP",
              "footnoteDescription": "All work created and distributed while working at <a href='http://gyro.com' target='_blank'>gyro</a>."
          },
          {
              "id": 4,
              "link": "http://mdinsider.com/",
              "imageUrl": "src/assets/img/portfolio-mdinsider.jpg",
              "title": "Mdi Insider",
              "description": "Created custom front and back-end functionality to a WordPress theme. Applied custom modules and templates based on client business rules.",
              "technologyStack": "Technologies used: CSS, HTML5, Javascript, MySQL, PHP, WordPress(CMS)",
              "footnoteDescription": "All work created and distributed while working at <a href='http://gyro.com' target='_blank'>gyro</a>."
          },
          {
              "id": 5,
              "link": "http://sapmobilejourney.com",
              "imageUrl": "src/assets/img/portfolio-sap.jpg",
              "title": "SAP",
              "description": "Responsible for expanding language globalization for site wide functionality. Created custom header and footer modules based on language specific countries. Helped create custom form specific language functionality and error handling.",
              "technologyStack": "Technologies used: CSS, HTML5, Javascript",
              "footnoteDescription": "All work created and distributed while working at <a href='http://gyro.com' target='_blank'>gyro</a>."
          },
          {
              "id": 6,
              "link": "http://consultinghammer.com/",
              "imageUrl": "src/assets/img/portfolio-hammer-consulting.jpg",
              "title": "Hammer Consulting",
              "description": "Created a custom Wordpress theme for a consulting firm",
              "technologyStack": "Technologies used: CSS, HTML5, Javascript, MySQL, PHP, WordPress(CMS)",
              "footnoteDescription": "All work created and distributed while working at <a href='http://gyro.com' target='_blank'>gyro</a>."
          }
      ]
    };
  }
}
</script>