<template>
    <div>
        <!-- Botón para abrir el modal -->
        <v-btn @click="openModal">Abrir Modal</v-btn>

        <!-- Modal con el carousel de cards -->
        <v-dialog v-model="modalOpen" max-width="800">
            <!-- Agregar una imagen de fondo al modal -->
            <v-img :src="require('@/assets/ispovala/fondo_modal.png')" class="modal-background-image" v-if="modalOpen" aspect-ratio="16/9">
                
                <!-- Contenido del carrusel de cards -->
                <v-carousel style="margin: 20px;">
                    <!-- Aquí puedes agregar las cards del carousel -->
                    <v-carousel-item v-for="(item, index) in items" :key="index">
                        <v-card>
                            <v-img :src="item.image" aspect-ratio="2.5"></v-img>
                            <v-card-title>{{ item.title }}</v-card-title>
                            <v-card-text>{{ item.description }}</v-card-text>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-img>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            modalOpen: false,
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
        };
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },
    },
};
</script>
  
<style scoped>
.modal-background-image {
    position: relative;
}
</style>
  