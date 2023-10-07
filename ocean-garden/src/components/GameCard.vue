<template>
    <v-container class="text-center">
        <v-row>
            <v-col v-for="(card, index) in cards" :key="index" cols="4" class="custom-col">
                <v-card @click="flipCard(card)" :class="{ 'flipped': card.flipped, 'matched': card.matched }">
                    <v-img :src="card.flipped ? card.image : require('@/assets/challenge-1/carta_base.png')"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { id: 'A1', image: require('@/assets/challenge-1/recurso_1.png'), pair: 'A', flipped: false, matched: false },
                { id: 'B1', image: require('@/assets/challenge-1/recurso_2.png'), pair: 'B', flipped: false, matched: false },
                { id: 'C1', image: require('@/assets/challenge-1/recurso_3.png'), pair: 'A', flipped: false, matched: false },
                { id: 'A2', image: require('@/assets/challenge-1/recurso_4.png'), pair: 'C', flipped: false, matched: false },
                { id: 'B2', image: require('@/assets/challenge-1/recurso_5.png'), pair: 'C', flipped: false, matched: false },
                { id: 'C2', image: require('@/assets/challenge-1/recurso_6.png'), pair: 'B', flipped: false, matched: false },
            ],
            firstCard: null,
            secondCard: null,
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
</style>
