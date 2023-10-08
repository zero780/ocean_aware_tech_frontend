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
                  <div class="container-ocean-challenge-3-map">
                      <img src="@/assets/challenge-3/world-map-compressed.png" alt="world-map" class="ocean-challenge-3-map">
                  </div>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
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

</style>
