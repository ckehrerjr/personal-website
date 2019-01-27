<template>
    <div class="u-aside-bottom">
        <span class="c-logo u-pull-left">CK</span>
        <header>
            <section class="u-pull-right">
                <a :href="resume"><img class="c-about__resume-icon" :src="imageIcon" :alt="alt" :title="title" /></a>
            </section> 
        </header>
    </div>
</template>

<script>
    import resumeIcon from '../assets/img/icon-resume.png';
    import resume from '../assets/charles_kehrer.doc';

    export default {
        data() {
            return {
                imageIcon: resumeIcon,
                resume,
                alt: 'Charlie Kehrer Jr Resume',
                title: 'Charlie Kehrer Jr Resume'
            }
        }
    }
</script>