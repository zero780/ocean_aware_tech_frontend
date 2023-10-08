<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean-challenge-3 mt-3">
        <v-col cols="auto">
            <v-dialog

                transition="dialog-bottom-transition"
                max-width="80%"
            >
                <template v-slot:activator="{ on, attrs }">
                    <img
                            src="@/assets/images/rocks-02.png"
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
                            <div class="container-ocean-challenge-3-map">
                                <img src="@/assets/challenge-1/fondo_cartas_v2.png" alt="world-map" class="ocean-challenge-3-map">
                                <!-- Estilo para posicionar GameCard encima de la imagen -->
                                <GameCard class="game-card-overlay"></GameCard>
                            </div>
                        </v-card-text>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
export default {
    components: {
        GameCard,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.ocean-challenge-3-map {
    width: 100%;
    height: 100%;
}


.v-card__text {
    padding: 0 !important;
}

/* Estilo para posicionar GameCard encima de la imagen */
.game-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 55%;
    margin-top: 2%;
    margin-left: 35%;
    z-index: 1; /* Asegura que esté encima de la imagen */
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
        transform: translateY(-15px);
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
