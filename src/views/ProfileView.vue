<script setup>
const perfil = {
  nombre: 'Juanín Pérez',
  profesion: 'Desarrollador Front End',
  libros: [
    { id: 1, titulo: 'Juanín va al colegio', descripcion: 'Un libro para niños' },
    { id: 2, titulo: 'Juanín aprende Front End', descripcion: 'Un libro para desarrolladores' },
    { id: 3, titulo: 'Juanín va al trabajo', descripcion: 'Un libro para trabajadores' }
  ]
}
</script>

<template>
  <div>
    <v-container>
      <h1 class="text-start text-display-large">Profile Page</h1>
      <v-card>
        <v-card-item>
          <template #prepend>
            <v-avatar image="https://i.pravatar.cc/300" size="120">
            </v-avatar>
          </template>
          <v-card-title>
            {{ perfil.nombre }}
          </v-card-title>
          <v-card-subtitle>
            {{ perfil.profesion }}
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <div class="d-flex align-center ga-4">
            <p class="text-headline-small flex-2-0">Autor de libros como:</p>
            <v-list class="flex-1-0" lines="two">
              <v-list-item v-for="libro in perfil.libros" :key="libro.id" :title="libro.titulo"
                :subtitle="libro.descripcion" />
            </v-list>
            <!-- <v-list :items="perfil.libros" item-title="titulo" item-value="id"></v-list> -->
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn block text="Contactar" prepend-icon="mdi-message-outline"></v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped></style>