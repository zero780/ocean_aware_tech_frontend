<template>
    <div>
        <v-row>
            <v-col v-for="fitoplancton in fitoplanctons" :key="fitoplancton.id" cols="4">
                <v-card @click="expandCard(fitoplancton)">
                    <v-img
                            :src="fitoplancton.imageUrl || 'ruta de la imagen por defecto'"
                            height="200px"
                    ></v-img>
                    <v-card-title>{{ fitoplancton.nombre }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" fullscreen hide-overlay>
            <v-card>
                <v-card-title>{{ selectedFitoplancton ? selectedFitoplancton.nombre : '' }}</v-card-title>
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
                    nombre: "Fitoplancton 1",
                    imageUrl: "URL de la imagen",
                    informacion: "Información sobre el fitoplancton 1...",
                },
                {
                    id: 2,
                    nombre: "Fitoplancton 2",
                    imageUrl: "URL de la imagen",
                    informacion: "Información sobre el fitoplancton 2...",
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
