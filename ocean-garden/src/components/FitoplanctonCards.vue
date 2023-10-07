<template>
    <div>
        <v-row>
            <v-col v-for="fitoplancton in fitoplanctons" :key="fitoplancton.id" cols="4">
                <v-card class="fitoplancton-card" @click="expandCard(fitoplancton)">
                    <v-img
                        :src="fitoplancton.imageUrl || 'ruta de la imagen por defecto'"
                        height="200px"
                    >
                        <v-card-title class="overlay-title">{{ fitoplancton.nombre }}</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" fullscreen hide-overlay>
            <v-card>
                <v-card-title class="dialog-title">{{ selectedFitoplancton ? selectedFitoplancton.nombre : '' }}</v-card-title>
                <v-card-text>
                    {{ selectedFitoplancton ? selectedFitoplancton.informacion : '' }}
                    <!-- Agrega aquí más información sobre el fitoplancton -->
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="closeDialog">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fitoplanctons: [
                {
                    id: 1,
                    nombre: "Crisofitas (Chrysophytes)",
                    imageUrl: "https://i.pinimg.com/originals/5f/ea/53/5fea5375be897b403de928fe1143c5dd.png",
                    informacion: "Información sobre el fitoplancton 1...",
                },
                {
                    id: 2,
                    nombre: "Silicoflagelados (Silicoflagellates)",
                    imageUrl: "https://i.pinimg.com/originals/80/74/18/807418c6fcb90eea264642f3146e3f37.png",
                    informacion: "Información sobre el fitoplancton 2...",
                },
                {
                    id: 3,
                    nombre: "Haptófitos (Haptophytes)",
                    imageUrl: "https://ars.els-cdn.com/content/image/3-s2.0-B9780123744739006627-gr1.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 4,
                    nombre: "Criptofitas (Cryptophytes)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/CSIRO_ScienceImage_6743_SEM_Cryptophyte.jpg/220px-CSIRO_ScienceImage_6743_SEM_Cryptophyte.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 5,
                    nombre: "Rafidofitas (Raphidophytes)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Gonyostomum-cells.JPG",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 6,
                    nombre: "Centrales (Centric Diatoms)",
                    imageUrl: "https://cdn.britannica.com/40/12340-050-E09C431B/frustules-cell-walls-Diatoms-opaline-silica-pores.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 7,
                    nombre: "Zooxantelas (Zooxanthellae)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Zooxanthellae.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 8,
                    nombre: "Euglenia verde (Euglena viridis)",
                    imageUrl: "https://www.mozaweb.com/es/mozaik3D/BIO/allat/zold_szemesostoros/960.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                {
                    id: 9,
                    nombre: "Flagelado Prymnesium parvum (Prymnesium parvum)",
                    imageUrl: "https://lovecraftianscience.files.wordpress.com/2014/11/cdn-phys-org.jpg",
                    informacion: "Información sobre el fitoplancton 3...",
                },
                // Agrega más fitoplanctons con información quemada aquí
            ],
            dialog: false,
            selectedFitoplancton: null,
        };
    },
    methods: {
        expandCard(fitoplancton) {
            this.selectedFitoplancton = fitoplancton;
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
            this.selectedFitoplancton = null;
        },
    },
};
</script>
<style scoped>
.fitoplancton-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.overlay-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}
.dialog-title {
    font-size: 24px;
    font-weight: bold;
    color: #1976D2; /* Color azul para resaltar */
}
</style>
