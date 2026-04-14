<script setup>

const links = [
  { title: 'Home', to: '/' },
  { title: 'Card Example', to: '/card-example' },
  { title: 'Profile', to: '/profile' },
]
</script>

<template>
  <v-app-bar :elevation="0" scroll-behavior="hide" scroll-threshold="20">

    <v-app-bar-title text="Conociendo Vuetify"></v-app-bar-title>

    <template v-slot:append>
      <v-btn v-for="link in links" :key="link" :text="link.title" density="default" color="indigo-accent-2"
        :to="link.to"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>