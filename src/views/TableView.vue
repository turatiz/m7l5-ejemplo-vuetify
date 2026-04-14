<script setup>
import usuariosJson from '@/data/usuarios.json'
import { ref } from 'vue';

const usuarios = ref(usuariosJson)

const search = ref('') // campo de busqueda/filtro de la tabla

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Apellido', key: 'apellido' },
  { title: 'Email', key: 'email' },
  { title: 'Estado', key: 'estado' },
  { title: 'Tipo', key: 'tipo' },
  { title: 'Evaluación', key: 'evaluacion' },
  { title: 'Género', key: 'genero' },
  { title: 'Acciones', key: 'acciones' }
]
</script>

<template>
  <div>
    <h1 class="text-start text-display-large">Administración de Usuarios</h1>
    <v-data-table :headers="headers" :items="usuarios" density="compact" hover items-per-page="10" :search="search">
      <template #top>
        <v-toolbar>
          <v-toolbar-title>
            <v-icon icon="mdi-account" color="medium-emphasis"></v-icon>
            Usuarios del sistema
          </v-toolbar-title>

          <v-text-field v-model="search" label="Buscar" density="compact" hide-details class="me-4"
            prepend-inner-icon="mdi-magnify"></v-text-field>

          <v-btn prepend-icon="mdi-plus" text="Agregar usuario" border></v-btn>
        </v-toolbar>
      </template>

      <template #item.estado="{ item }">
        <v-chip size="small" :color="item.estado === 'activo' ? 'green' : 'red'">
          {{ item.estado === 'activo' ? 'Activo' : 'Inactivo' }}
        </v-chip>
      </template>

      <template #item.evaluacion="{ item }">
        <span class="text-grey text-body-small me-2">
          ({{ item.evaluacion }})
        </span>
        <v-rating :model-value="item.evaluacion" active-color="yellow" half-increments density="compact" readonly
          size="18"></v-rating>
      </template>

    </v-data-table>

  </div>
</template>

<style scoped></style>