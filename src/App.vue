<template>
    <div>
        <div class="header">
            <h1>重庆邮电大学开源镜像</h1>
        </div>
        <mirrorListCard></mirrorListCard>
        <proxyCard></proxyCard>
        <AboutUs></AboutUs>
    </div>
</template>

<script>
    import mirrorListCard from './components/mirrorListCard.vue';
    import proxyCard from './components/proxyCard.vue';
    import AboutUs from './components/AboutUs.vue';


    export default {
        name: 'app',
        components: {
            mirrorListCard,
            proxyCard,
            AboutUs,
        },
    };
</script>

<style>
* {
    margin:  0 ;
}
.header {
    text-align: center;
    margin-top: 20px;
}
h1 {
    display: inline;
}
h2 {
    font-size: 35px;
}
</style>
