<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme()

const temaSeleccionado = ref(theme.global.name.value) // para seleccionar el tema del sistema (predefinido por el usuario)

const handleChange = () => {
  theme.change(temaSeleccionado.value)
}

const links = [
  { title: 'Home', to: '/' },
  { title: 'Card Example', to: '/card-example' },
  { title: 'Profile', to: '/profile' },
  { title: 'Form', to: '/form' }
]


</script>

<template>
  <v-app-bar :elevation="0" scroll-behavior="hide" scroll-threshold="20">

    <v-app-bar-title text="Conociendo Vuetify"></v-app-bar-title>

    <template v-slot:append>
      <v-btn v-for="link in links" :key="link" :text="link.title" density="default" color="indigo-accent-2"
        :to="link.to"></v-btn>
    </template>

    <v-switch class="my-auto mr-2" color="amber-darken-4" v-model="temaSeleccionado" false-value="dark"
      true-value="light" @update:model-value="handleChange">
      <template #prepend>
        <v-icon :icon="temaSeleccionado === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          :color="temaSeleccionado === 'light' ? 'amber-darken-4' : 'white'"></v-icon>
      </template>
    </v-switch>
  </v-app-bar>
</template>

<style scoped></style>