<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean-challenge-3 mt-3">
        <v-col cols="auto">
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="70%"
          >
            <template v-slot:activator="{ on, attrs }">
              <img
                            src="@/assets/images/rocks-03.png"
                            alt="Open Carousel"
                            v-bind="attrs"
                            v-on="on"
                            class="bobbing-image custom-image"
                            style="width: 240px;"
                        />
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-btn icon style="color: black; background-color: white;" class="boton-superpuesto"
                            @click="dialog.value = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                <v-card-text class="p-0">
                    <div class="images-container">
                        <div class="container-ocean-challenge-3-map">
                            <img src="@/assets/challenge-3/world-map-compressed.png" alt="world-map" class="ocean-challenge-3-map">
                        </div>

                        <div class="ocean-image" :style="item.style" v-for="item in oceans" :key="item.index">
                            <span class="notify-badge" v-if="!item.visited">Visit</span>
                            <img :src="item.marker" alt="ocean" @click="showDialogOcean(item)" v-popover:popoverOceanImage class="marker" @mouseenter="hoverOceanMarker(item)">
                        </div>
                        <popover name="popoverOceanImage" event="hover" v-if="hoverOcean">
                            <img :src="hoverOcean.image">
                        </popover>


<!--                        <div class="artic-image ocean-image" style="right: 100px; top: 100px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/artic.jpg" alt="artic ocean" @click="showDialogOcean">-->
<!--                        </div>-->
<!--                        <div class="south-america-image ocean-image" style="right: 520px; top: 490px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/south-america.jpg" alt="south america ocean">-->
<!--                        </div>-->
<!--                        <div class="pacific-north-image ocean-image" style="right: 520px; top: 390px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/pacific-north.jpg" alt="pacific north ocean">-->
<!--                        </div>-->
<!--                        <div class="japan-image ocean-image" style="right: 150px; top: 300px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/japan.png" alt="japan ocean">-->
<!--                        </div>-->
<!--                        <div class="indian-image ocean-image" style="right: -130px; top: 420px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/indian.jpg" alt="indian ocean">-->
<!--                        </div>-->
<!--                        <div class="atlantic-image ocean-image" style="right: 170px; top: 270px;">-->
<!--                            <img src="@/assets/challenge-3/oceans/atlantic.jpg" alt="atlantic ocean">-->
<!--                        </div>-->
                    </div>
                </v-card-text>
              </v-card>


              <v-dialog
                transition="dialog-bottom-transition"
                v-model="activeOceanDialog"
                max-width="30%"
                v-if="activeOcean"
              >
<!--                  <template v-slot:default="dialog">-->
                  <template>
                      <v-card>
<!--                        <v-toolbar-->
<!--                          color="primary"-->
<!--                          dark-->
<!--                        >-->
<!--                            <v-btn-->
<!--                              icon-->
<!--                              dark-->
<!--                              @click="dialog.value = false"-->
<!--                            >-->
<!--                              <v-icon>mdi-close</v-icon>-->
<!--                            </v-btn>-->
<!--                            <v-toolbar-title>Ice Highway</v-toolbar-title>-->
<!--                        </v-toolbar>-->
                        <v-card-text class="p-0">
                            <div class="active-ocean-container pb-2">
                                <img :src="activeOcean.media">
                            </div>
                            <div class="description-ocean-text pb-2">
                                <p>{{ activeOcean.description }}</p>
                            </div>
                        </v-card-text>
                      </v-card>
                  </template>
              </v-dialog>

            </template>
          </v-dialog>
        </v-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            oceans: [
                {
                    'image': require('@/assets/challenge-3/oceans/artic.jpg'),
                    'name': 'Ice Highway',
                    'description': 'Sea water off the east coast of Greenland looked a bit like marbled paper.',
                    'media': require('@/assets/challenge-3/oceans/artic.gif'),
                    'style': 'right: 440px; top: 100px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/south-america.jpg'),
                    'name': 'Chilean Phytoplankton Bloom',
                    'description': 'Phytoplankton bloom off the coast of Chile in this Suomi-NPP/VIIRS.',
                    'media': require('@/assets/challenge-3/oceans/south-america.gif'),
                    'style': 'right: 560px; top: 490px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/pacific-north.jpg'),
                    'name': 'Central American Upwelling',
                    'description': 'Winds flowing across topographic low points of Mexico and Central America drive upwelling in the gulfs of Tehuantepec, Papagayo, and Panama.',
                    'media': require('@/assets/challenge-3/oceans/pacific-north.gif'),
                    'style': 'right: 630px; top: 390px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/japan.png'),
                    'name': 'Oyashio Blooms',
                    'description': 'Divers phytoplankton communities lend their different colors to the southern end of the Oyashio Current during the spring bloom.',
                    'media': require('@/assets/challenge-3/oceans/japan.gif'),
                    'style': 'right: 30px; top: 310px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/indian.jpg'),
                    'name': 'Indian Ocean Spring',
                    'description': 'Were it not for satellite ocean color sensors and periodic breaks in cloud cover over the southwestern Indian Ocean, we humans would have little idea of the complex dance of the photosynthesizing phytoplankton that is constantly playing out on that remote stage.',
                    'media': require('@/assets/challenge-3/oceans/indian.gif'),
                    'style': 'right: 190px; top: 450px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/atlantic.jpg'),
                    'name': 'North Atlantic Spring Bloom',
                    'description': 'This view of Iceland and the North Atlantic Ocean to its southwest shows the spring phytoplankton bloom near its peak.',
                    'media': require('@/assets/challenge-3/oceans/atlantic.gif'),
                    'style': 'right: 450px; top: 280px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
                {
                    'image': require('@/assets/challenge-3/oceans/fiji.jpg'),
                    'name': 'Fiji Archipelago',
                    'description': 'It is unusual for completely clear skies over Fiji to coincide with the overpass of one of the MODIS sensors',
                    'media': require('@/assets/challenge-3/oceans/fiji.gif'),
                    'style': 'right: -100px; top: 420px;',
                    'marker': require('@/assets/challenge-3/oceans/ocean-marker-2.png'),
                    'visited': false
                },
            ],
            activeOcean: null,
            activeOceanDialog: false,
            hoverOcean: null
        }
    },
    methods:{
        showDialogOcean(newOcean){
            this.activeOcean = newOcean
            newOcean.visited = true
            this.activeOceanDialog = true
        },
        hoverOceanMarker(newOcean){
            this.hoverOcean = newOcean
        }
    }
}
</script>

<style scoped>
    .ocean-challenge-3-map{
        width: 100%;
        height: 100%;
    }

    .v-dialog{
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .v-card__text{
        padding: 0!important;
    }

    .boton-superpuesto {
      position: absolute;
      top: 10px;
      right: 10px;
}

@keyframes bobbing {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(15px);
        /* Move 5px up */
    }

    100% {
        transform: translateY(0);
    }
}

/* Apply the animation to the image */
.bobbing-image {
    animation: bobbing 2s ease infinite;
    /* Adjust the duration and easing as needed */
}

.custom-image:hover {
    filter: contrast(150%);
    /* Increase contrast on hover (adjust the value as needed) */
    animation-play-state: paused;
    /* Pause the animation on hover */
}

    .images-container {
        position: relative;
        width: 100%; /* Adjust the width as needed */
    }

    .ocean-image{
        position: absolute;
        /*overflow: hidden; border-radius: 50%;*/
    }

    .ocean-image img{
        width: 11%;
        /*width: auto; height: 100%; margin-left: -50px;*/
        border-radius: 10%;
        cursor: pointer;
        /*border-top-left-radius: 50% 50%; border-top-right-radius: 50% 50%; border-bottom-right-radius: 50% 50%; border-bottom-left-radius: 50% 50%;*/
    }

    .ocean-image img.marker {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
        animation: pulse 1s infinite;
        border-radius: 50%;
    }
    .ocean-image:hover img.marker {
      -webkit-transform: rotate(15deg) scale(1.4);
      transform: rotate(15deg) scale(1.4);
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
    }

    @keyframes pulse{
        from{
          box-shadow: 0 0 0 0 rgba(198, 182, 179, 0.85);
        }

        to{
          box-shadow: 0 0 0 30px rgba(201, 48, 48, 0);
        }
    }

    .description-ocean-text p{
        font-size: 20px!important;
    }

    .vue-popover{
        background-color: #191919!important;
        width: 100%;
        /*height: 300px;*/
    }

    .vue-popover img{
        width: 100%;
    }

.notify-badge{
    /*position: absolute;*/
    right:-20px;
    top:10px;
    background:green;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color:white;
    padding:5px 10px;
    font-size:15px;
    font-weight: bolder;
}
</style>
