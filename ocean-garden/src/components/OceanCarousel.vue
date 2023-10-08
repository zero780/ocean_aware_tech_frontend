<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean_carousel mt-3">
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="80%">
                <template v-slot:activator="{ on, attrs }">
                    <img
                            src="@/assets/images/rocks-01.png"
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
                            <div>
                                <img src="@/assets/ocean_carousel/fondo_modal.png" alt="fondo_modal"
                                    class="ocean_carousel-map">
                                    <div class="card-overlay">
                                    <carousel-3d perspective=20 autoplay=1 display=5 width=640 height=500 space=260>
                                    <slide :index="0">
                                        Slide 0 Content
                                    </slide>
                                    <slide :index="1">
                                        Slide 1 Content
                                    </slide>
                                    <slide :index="2">
                                        Slide 2 Content
                                    </slide>
                                    </carousel-3d>
                                </div>
                            </div>

                        </v-card-text>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </div>
</template>

<script>

import {Carousel3d, Slide}  from 'vue-carousel-3d';

export default {


  mounted() {

    setTimeout(() => {
        // Realiza cambios en el DOM aquí, por ejemplo, cambiar la altura de un elemento.
        const carouselContainer = document.getElementById('miCarousel');

        if (carouselContainer) {
          carouselContainer.style.height = '800px';
          carouselContainer.style.width = '100%';
          carouselContainer.style.height = '100%';

        }
      }, 2000); // Espera 1 segundo antes de ejecutar el código.

  },

    components: {
        Carousel3d,
        Slide,
    },
    data() {
        return {
            isMounted: false,
            items: [
                {
                    title: "Card 1",
                    description: "Descripción de la Card 1",
                    image: "https://via.placeholder.com/400x300",
                },
                {
                    title: "Card 2",
                    description: "Descripción de la Card 2",
                    image: "https://via.placeholder.com/400x300",
                },
                // Agrega más items según sea necesario
            ],
        }
    }
}

</script>

<style scoped>
.ocean_carousel-map {
    width: 100%;
    height: 100%;
}


.v-card__text {
    padding: 0 !important;
}

.boton-superpuesto {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 55%;
    margin-top: 2%;
    margin-left: 35%;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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

</style>
