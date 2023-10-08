<template>
    <div>
        <audio autoplay loop>
        <source src="@/assets/sounds/beach-sound.mp3" type="audio/mpeg">Tu navegador no admite la reproducción de audio.
        </audio>
        <div class="container-game-map" v-if="showMap" :style="showMapCustomStyle">
            <img src="@/assets/images/main_map.png" class="game-map">
        </div>

<!--        // Pulpito-->
        <OceanPulpito style="position: absolute; top:10%; left:4; z-index:8;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        // PRIMER HITO CAROUSEL 3D ISAAC-->
        <OceanCarousel style="position: absolute; top:20%; left:16%; z-index:4;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        //SEGUNDO CARTAS ENRIQUE-->
        <ChallengeOne style="position: absolute; top: 30%; left:28%; z-index:5;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        //TERCER HITO MAPA MILTON-->
        <ChallengeThree style="position: absolute; top:40%; left:40%; z-index:6;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        //CUARTO HITO INFOGRAFIA ISAAC - MILTON-->
        <ChallengeFour style="position: absolute; top:30%; left:52%; z-index:7;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        //QUINTO HITO ESPECIES 3D EDUARDO-->
        <ChallengeFive style="position: absolute; top: 20%; left:64%; z-index:8;" v-if="showMap" :style="showMapCustomStyle"/>

<!--        //SEXTO HITO CERTIFICADO-->
        <CertificadoEnd style="position: absolute; top: 10%; left:76%; z-index:9;" v-if="showMap" :style="showMapCustomStyle"/>

        <div class="container-game-map-2" :style="noShowMapCustomStyle" v-else>
            <img src="@/assets/images/first_screen.png" class="game-map">
            <v-btn @click="startGame" style="position: absolute; top: 70%; left: 47%;">Start</v-btn>
        </div>
    </div>
</template>

<script>
import ChallengeOne from "@/components/ChallengeOne.vue";
import ChallengeThree from "@/components/ChallengeThree.vue";
import ChallengeFive from "@/components/ChallengeFive.vue";
import OceanCarousel from "@/components/OceanCarousel.vue";
import CertificadoEnd from "@/components/CertificadoEnd.vue";
import OceanPulpito from "@/components/OceanPulpito.vue";
import ChallengeFour from "@/components/ChallengeFour.vue";

export default {
    components: {
    ChallengeFour,
    ChallengeOne,
    ChallengeThree,
    ChallengeFive,
    OceanCarousel,
    CertificadoEnd,
    OceanPulpito
},
    data() {
        return {
            showMap: false,
            showMapCustomStyle: '',
            noShowMapCustomStyle: ''
        }
    },
    methods: {
        startGame(){
            // this.showMapCustomStyle = 'display: block;'
            this.showMap = true
        }
    }
}
</script>

<style>
/* Reset default margin and padding */
body,
html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* Hide vertical scrollbar */
}

/* Set full width and height for the container */
.container-game-map {
    width: 100vw !important;
    /* 100% of viewport width */
    height: 100vh !important;
    /* 100% of viewport height */
    overflow-x: false !important;
    /* Enable horizontal scrolling */
    overflow-y: false !important;
    white-space: nowrap !important;
    /* Prevent text wrapping */
}

.v-dialog {
    overflow-y: hidden;
    overflow-x: hidden;
}

/* Set the image to cover the entire container */
.game-map {
    width: 100% !important;
    /* Allow the image to have its natural width */
    height: 100% !important;
    /* 100% height of container */
    overflow-y: hidden !important;
    object-fit: cover !important;
    /* Ensure the image covers the container */
    transform: translateX(0) !important;
    /* Initialize horizontal position */
    animation: scrollImage 60s linear infinite !important;
    /* Horizontal scrolling animation */
}

/*@media (max-width: 600px) {*/
/*     .game-map {*/
/*        width: 100%!important; !* Cover full width while maintaining aspect ratio *!*/
/*        height: 100%!important;*/
/*        overflow-y: hidden!important;*/
/*    }*/
/*}*/

    /*.container-game-map-2{*/
    /*    background-image: url("/src/assets/images/first_screen.png");*/
    /*    background-size: cover;*/
    /*}*/
</style>
