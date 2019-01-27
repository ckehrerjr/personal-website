<template>
    <div class="u-strip-margin-bottom u-clear-both">
        <section class="c-about u-clear-both" id="aboutSection">
            <h1>About</h1>
            <p class="u-strip-margin-top">{{ aboutInformation }}</p>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aboutInformation: 'My name is Charlie, I\'m a frontend developer living in Cincinnati, Ohio. I enjoy building the best possible UI\'s, while keeping up to date with the latest technologies.'
            }
        }
    }
</script>
