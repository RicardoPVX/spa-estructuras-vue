<script setup lang="ts">
import { ref } from 'vue'

interface Alumno {
  id: number
  nombre: string
}

const alumnos = ref<Alumno[]>([
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
  { id: 3, nombre: 'Sofía' },
])

let siguienteId = 4
const nuevoNombre = ref('')

function agregarAlInicio() {
  const nombre = nuevoNombre.value.trim()
  if (!nombre) return
  alumnos.value.unshift({ id: siguienteId++, nombre })
  nuevoNombre.value = ''
}

function eliminar(id: number) {
  alumnos.value = alumnos.value.filter((alumno) => alumno.id !== id)
}
</script>

<template>
  <section>
    <h1>v-bind:key</h1>

    <div class="tarjeta">
      <h2>¿Qué es?</h2>
      <p>
        Dentro de un <code>v-for</code>, el atributo <code>v-bind:key</code> (o su forma corta
        <code>:key</code>) le da a cada elemento un <strong>identificador único</strong>. Con él,
        Vue sabe exactamente qué elemento es cuál cuando la lista cambia (se agregan, eliminan o
        reordenan datos) y actualiza solo lo necesario.
      </p>
      <p>
        La key debe ser un valor único y estable, como un <code>id</code>. No se recomienda usar
        el índice si la lista va a cambiar de orden.
      </p>
    </div>

    <div class="tarjeta">
      <h2>Ejemplo: lista de alumnos con id</h2>
      <p>
        Escribe una nota junto a un alumno y luego agrega uno nuevo al inicio: gracias a la key,
        cada nota se queda con su alumno.
      </p>

      <form @submit.prevent="agregarAlInicio">
        <input v-model="nuevoNombre" placeholder="Nombre del alumno" />
        <button type="submit">Agregar al inicio</button>
      </form>

      <ul class="lista-alumnos">
        <li v-for="alumno in alumnos" v-bind:key="alumno.id">
          <span><strong>#{{ alumno.id }}</strong> {{ alumno.nombre }}</span>
          <input placeholder="Nota..." />
          <button @click="eliminar(alumno.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.lista-alumnos {
  list-style: none;
  padding: 0;
}

.lista-alumnos li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.6rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.lista-alumnos span {
  min-width: 120px;
}
</style>
