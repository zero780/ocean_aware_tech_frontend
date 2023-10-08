<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean_carousel mt-3">
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="80%">
                <template v-slot:activator="{  attrs }">
                    <img
                            src="@/assets/images/pulpito.png"
                            alt="Open Carousel"
                            v-bind="attrs"
                            class="bobbing-image custom-image"
                            style="width: 240px;"
                        />
                </template>
            </v-dialog>
        </v-col>
    </div>
</template>

<script>


export default {


    components: {

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
        transform: translateX(15px);

    }

    100% {
        transform: translateX(0);
    }
}

/* Apply the animation to the image */
.bobbing-image {
    animation: bobbing 2s ease infinite;
    /* Adjust the duration and easing as needed */
}

</style>
