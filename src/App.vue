<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="encabezado">
    <h1 class="titulo">Estructuras de control en Vue</h1>

    <!-- Menú de navegación con router-link (SPA: no recarga la página) -->
    <nav class="menu">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/v-if">v-if / v-else-if / v-else</RouterLink>
      <RouterLink to="/v-show">v-show</RouterLink>
      <RouterLink to="/v-for">v-for</RouterLink>
      <RouterLink to="/v-key">v-bind:key</RouterLink>
    </nav>
  </header>

  <main class="contenido">
    <!-- Aquí se muestra la vista de la ruta activa -->
    <RouterView />
  </main>

  <footer class="pie">Proyecto Unidad 3 · Ricardo Pinto</footer>
</template>

<style scoped>
.encabezado {
  background: #1e293b;
  color: #fff;
  padding: 1.5rem 1rem 0;
  text-align: center;
}

.titulo {
  color: #fff;
  margin: 0 0 1rem;
  font-size: 1.6rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
}

.menu a {
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.7rem 1rem;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
}

.menu a:hover {
  color: #fff;
  background: #334155;
}

/* Clase que Vue Router agrega al enlace de la ruta activa */
.menu a.router-link-exact-active {
  background: #f8fafc;
  color: #16a34a;
}

.contenido {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.pie {
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  padding: 1.5rem 1rem;
}
</style>
