<script setup>

</script>

<template>
  <div>
    <h1>Ejemplos de Cards</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4" xl="3">
        <!-- 1. Usando props -->
        <v-card class="h-100" title="Usando props" subtitle="Subtítulo de la Card"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere.">
          <div class="text-center text-body-small opacity-50">
            <p>Usando props</p>
          </div>
        </v-card>

      </v-col>

      <v-col cols="12" md="6" lg="4" xl="3">
        <!-- 2. Usando slots -->
        <v-card class="h-100">
          <template #title>Usando slots</template>
          <template #subtitle>Subtítulo de la segunda Card</template>
          <template #text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere.</template>
          <div class="text-center text-body-small opacity-50">
            <p>Usando slots</p>
          </div>
        </v-card>

      </v-col>

      <v-col cols="12" md="6" lg="4" xl="3">
        <!-- 3. Usando componentes -->
        <v-card class="h-100">
          <v-card-title>
            Usando componentes
          </v-card-title>
          <v-card-subtitle>Subtítulo de la tercera Card</v-card-subtitle>
          <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere.</v-card-text>
          <div class="text-center text-body-small opacity-50">
            <p>Usando componentes</p>
          </div>
        </v-card>

      </v-col>
    </v-row>





  </div>
</template>

<style scoped></style>