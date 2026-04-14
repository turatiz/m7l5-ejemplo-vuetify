<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const valid = ref(false) // estado de validez del formulario
const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const nameRules = [
  value => !!value || 'El nombre es requerido',
  value => value.length >= 2 || 'Mínimo 2 caracteres para el nombre',
  value => value.length <= 10 || 'Máximo 10 caracteres para el nombre'
]

const lastnameRules = [
  value => !!value || 'El apellido es requerido',
  value => value.length >= 2 || 'Mínimo 2 caracteres para el apellido',
  value => value.length <= 20 || 'Máximo 20 caracteres para el apellido'
]

const emailRules = [
  value => !!value || 'El email es requerido',
  value => emailPattern.test(value) || 'El e-mail ingresado es inválido'
]

const passwordRules = [
  value => !!value || 'La contraseña es requerida',
  value => passwordPattern.test(value) || 'Mínimo 8 caracteres, 1 letra mayúscula, 1 minúscula y 1 número'
]

const handleSubmit = () => {
  const datos = {
    name: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  }
  console.table(datos)

  firstname.value = ''
  lastname.value = ''
  email.value = ''
  password.value = ''

  router.push({ name: 'Home' })
}
</script>

<template>
  <div>
    <v-container>
      <h1 class="text-start text-display-large">Formulario de registro</h1>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field :rules="nameRules" v-model="firstname" hint="Escribe tu nombre" :counter="10" variant="solo"
              clearable label="Nombre" placeholder="Juanin" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field :rules="lastnameRules" v-model="lastname" hint="Escribe tu apellido" label="Apellido"
              :counter="20" variant="solo" clearable placeholder="Pérez" required>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field :rules="emailRules" v-model="email" hint="Escribe tu email para registrarte" label="Email"
              variant="solo" clearable placeholder="juanin@mail.com" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field :rules="passwordRules" v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
              variant="solo" hint="Mínimo 8 caracteres" label="Contraseña" name="input-10-1" counter
              @click:append="showPassword = !showPassword" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" text="Enviar" block :disabled="!valid" />
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<style scoped></style>