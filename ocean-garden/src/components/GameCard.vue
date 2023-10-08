<template>
    <v-container class="text-center">
        <v-row>
            <v-col v-for="(card, index) in cards" :key="index" cols="4" class="custom-col">
                <v-card @click="flipCard(card)" :class="{ 'flipped': card.flipped, 'matched': card.matched }">
                    <v-img :src="card.flipped ? card.image : require('@/assets/challenge-1/carta_base.png')"></v-img>
                </v-card>
            </v-col>
        </v-row>

        <!-- Modal para mostrar información de la pareja de cartas que hizo match -->
        <v-dialog v-if="matchedCards[0]" v-model="showModal">
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar
                        color="primary"
                        dark
                    >
                        <v-btn
                            icon
                            dark
                            @click="dialog.value = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Información</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="p-0">
<!--                        <div v-if="matchedCards">-->
<!--                            <p>Carta 1: {{ matchedCards[0].pair }}</p>-->
<!--                            <p>Carta 2: {{ matchedCards[1].pair }}</p>-->
<!--                        </div>-->
                        <img :src="matchedCards[0].image_final" alt="Descripción de la imagen" style="max-width: 60%;">

                    </v-card-text>
                </v-card>
            </template>
        </v-dialog>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { id: 'A1', image: require('@/assets/challenge-1/recurso_13.png'), pair: 'A', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_19.png') },
                { id: 'B1', image: require('@/assets/challenge-1/recurso_15.png'), pair: 'B', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_20.png') },
                { id: 'C1', image: require('@/assets/challenge-1/recurso_14.png'), pair: 'A', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_19.png') },
                { id: 'A2', image: require('@/assets/challenge-1/recurso_17.png'), pair: 'C', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_21.png') },
                { id: 'B2', image: require('@/assets/challenge-1/recurso_18.png'), pair: 'C', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_21.png') },
                { id: 'C2', image: require('@/assets/challenge-1/recurso_16.png'), pair: 'B', flipped: false, matched: false, image_final: require('@/assets/challenge-1/recurso_20.png') },
            ],
            firstCard: null,
            secondCard: null,
            showModal: false, // Controla la visibilidad del modal
            matchedCards: [], // Almacena las cartas que hicieron match
        };
    },
    methods: {
        flipCard(card) {
            if (!card.flipped && !this.firstCard) {
                card.flipped = true;
                this.firstCard = card;
            } else if (!card.flipped && this.firstCard && !this.secondCard) {
                card.flipped = true;
                this.secondCard = card;
                if (this.firstCard.pair === this.secondCard.pair) {
                    this.firstCard.matched = true;
                    this.secondCard.matched = true;
                    // Agrega las cartas que hicieron match al array
                    this.matchedCards = [this.firstCard, this.secondCard];
                    // Abre el modal
                    this.showModal = true;
                }
                setTimeout(() => {
                    if (!this.firstCard.matched) {
                        this.firstCard.flipped = false;
                    }
                    if (!this.secondCard.matched) {
                        this.secondCard.flipped = false;
                    }
                    this.firstCard = null;
                    this.secondCard = null;
                }, 1000);
            }
        },
        closeModal() {
            // Cierra el modal y reinicia la información de las cartas que hicieron match
            this.showModal = false;
            if (this.matchedCards.length === 2) {
                this.matchedCards[0] = null;
                this.matchedCards[1] = null;
            }
            this.matchedCards = [];
        }

    },
};
</script>

<style scoped>
.flipped {
    transform: rotateY(180deg);
    transition: transform 0.5s ease;
}

.matched {
    opacity: 0.6;
    pointer-events: none;
}

.custom-col {
    flex: 0 0 calc(33.333% - 16px);
}

.dialog-right {
    right: 20%;
}
</style>
