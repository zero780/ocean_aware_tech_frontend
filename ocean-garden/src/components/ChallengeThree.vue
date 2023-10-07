<template>
    <!-- Reto 3 oceanos-->
    <div class="ocean-challenge-3 mt-3">
        <v-col cols="auto">
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="60%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
              >Open reto 3</v-btn>
            </template>
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
                    <v-toolbar-title>Conoce los diferentes océanos</v-toolbar-title>

                </v-toolbar>
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

<style>
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
</style>
