<script setup lang="ts">
import { ref } from 'vue'

const calificacion = ref(85)
</script>

<template>
  <section>
    <h1>v-if / v-else-if / v-else</h1>

    <div class="tarjeta">
      <h2>¿Qué es?</h2>
      <p>
        Las directivas <code>v-if</code>, <code>v-else-if</code> y <code>v-else</code> sirven para
        el <strong>renderizado condicional</strong>: Vue evalúa las condiciones en orden y solo
        crea en el DOM el bloque cuya condición se cumple. Los demás bloques no existen en la
        página.
      </p>
      <p>
        <code>v-else-if</code> y <code>v-else</code> deben ir justo después de un elemento con
        <code>v-if</code> o <code>v-else-if</code>.
      </p>
    </div>

    <div class="tarjeta">
      <h2>Ejemplo: evaluar una calificación</h2>
      <label>
        Calificación (0 a 100):
        <input v-model.number="calificacion" type="number" min="0" max="100" />
      </label>

      <p v-if="calificacion >= 90" class="resultado exito">Excelente 🏆</p>
      <p v-else-if="calificacion >= 70" class="resultado aviso">Aprobado 👍</p>
      <p v-else class="resultado error">Reprobado ❌</p>
    </div>
  </section>
</template>
