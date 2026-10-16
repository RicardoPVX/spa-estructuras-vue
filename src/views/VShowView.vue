<script setup lang="ts">
import { ref } from 'vue'

const mostrar = ref(true)
</script>

<template>
  <section>
    <h1>v-show</h1>

    <div class="tarjeta">
      <h2>¿Qué es?</h2>
      <p>
        <code>v-show</code> muestra u oculta un elemento según una condición. A diferencia de
        <code>v-if</code>, el elemento <strong>siempre se crea en el DOM</strong>; Vue solo le
        cambia el estilo <code>display: none</code> cuando la condición es falsa.
      </p>
      <p>
        Conviene usarlo cuando algo se muestra y oculta muchas veces, porque cambiar el CSS es
        más rápido que crear y destruir el elemento.
      </p>
    </div>

    <div class="tarjeta">
      <h2>Ejemplo: mostrar u ocultar un mensaje</h2>
      <button @click="mostrar = !mostrar">
        {{ mostrar ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
      </button>

      <p v-show="mostrar" class="resultado info">
        👋 ¡Hola! Este mensaje se oculta con <code>display: none</code>, pero sigue en el DOM.
      </p>
    </div>
  </section>
</template>
