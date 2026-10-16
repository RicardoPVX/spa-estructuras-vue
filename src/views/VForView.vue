<script setup lang="ts">
const materias = ['Programación Web', 'Bases de Datos', 'Redes', 'Matemáticas', 'Inglés']
</script>

<template>
  <section>
    <h1>v-for</h1>

    <div class="tarjeta">
      <h2>¿Qué es?</h2>
      <p>
        <code>v-for</code> sirve para <strong>repetir un elemento por cada dato de una lista</strong>
        (arreglo). Su sintaxis es <code>v-for="elemento in lista"</code>, y también se puede
        obtener la posición con <code>v-for="(elemento, indice) in lista"</code>.
      </p>
      <p>
        Así no hay que escribir a mano cada elemento: si la lista cambia, Vue actualiza la página
        automáticamente.
      </p>
    </div>

    <div class="tarjeta">
      <h2>Ejemplo: lista de materias</h2>
      <ol>
        <li v-for="(materia, indice) in materias" :key="materia">
          {{ materia }} <small>(índice {{ indice }})</small>
        </li>
      </ol>
      <p>Total de materias: {{ materias.length }}</p>
    </div>
  </section>
</template>
