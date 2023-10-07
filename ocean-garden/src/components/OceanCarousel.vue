<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean_carousel mt-3">
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="70%">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">Open Carousel</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-btn icon style="color: black; background-color: white;" class="boton-superpuesto"
                            @click="dialog.value = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-card-text class="p-0">
                            <div class="container-ocean_carousel-map">
                                <img src="@/assets/ocean_carousel/fondo_modal.png" alt="world-map"
                                    class="ocean_carousel-map">
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

<style>
.ocean_carousel-map {
    width: 100%;
    height: 100%;
}

.v-dialog {
    overflow-y: hidden;
}

.v-card__text {
    padding: 0 !important;
}

.boton-superpuesto {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
