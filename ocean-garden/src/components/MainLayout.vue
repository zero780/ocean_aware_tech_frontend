<template>
    <div>
        <div class="container-game-map" v-if="showMap">
            <img src="@/assets/images/main_map.png" class="game-map">
        </div>
        <ChallengeOne  style="position: absolute; top: 100px; left: 100px; z-index:1;"/>
        <ChallengeThree style="position: absolute; top:300px; left:200px; z-index:3;"/>
        <OceanCarousel style="position: absolute; top:400px; left:300px; z-index:4;"/>
    </div>
</template>

<script>
import ChallengeOne from "@/components/ChallengeOne.vue";
import ChallengeThree from "@/components/ChallengeThree.vue";
import OceanCarousel from "@/components/OceanCarousel.vue";

export default {
    components: {
        ChallengeOne,
        ChallengeThree,
        OceanCarousel
    },
    data() {
        return {
            showMap: true
        }
    }
}
</script>

<style>
    /* Reset default margin and padding */
    body, html {
        margin: 0;
        padding: 0;
        overflow: hidden; /* Hide vertical scrollbar */
    }

    /* Set full width and height for the container */
    .container-game-map {
        width: 100vw!important; /* 100% of viewport width */
        height: 100vh!important; /* 100% of viewport height */
        overflow-x: false!important; /* Enable horizontal scrolling */
        overflow-y: false!important;
        white-space: nowrap!important; /* Prevent text wrapping */
    }

    /* Set the image to cover the entire container */
    .game-map {
        width: 100%!important; /* Allow the image to have its natural width */
        height: 100%!important; /* 100% height of container */
        overflow-y: hidden!important;
        object-fit: cover!important; /* Ensure the image covers the container */
        transform: translateX(0)!important; /* Initialize horizontal position */
        animation: scrollImage 60s linear infinite!important; /* Horizontal scrolling animation */
    }

    /*@media (max-width: 600px) {*/
    /*     .game-map {*/
    /*        width: 100%!important; !* Cover full width while maintaining aspect ratio *!*/
    /*        height: 100%!important;*/
    /*        overflow-y: hidden!important;*/
    /*    }*/
    /*}*/
</style>
