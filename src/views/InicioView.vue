<template>
  <section>
    <h1>Bienvenido</h1>

    <div class="tarjeta">
      <h2>¿De qué trata este sitio?</h2>
      <p>
        Esta es una <strong>Single Page Application (SPA)</strong> hecha con Vue 3 y Vue Router.
        Cada sección del menú explica una estructura de control de Vue y muestra un ejemplo
        funcionando. Al cambiar de sección la página no se recarga: Vue Router solo cambia el
        componente que se muestra.
      </p>
    </div>

    <div class="tarjeta">
      <h2>Secciones</h2>
      <ul>
        <li><RouterLink to="/v-if">v-if / v-else-if / v-else</RouterLink>: renderizado condicional.</li>
        <li><RouterLink to="/v-show">v-show</RouterLink>: mostrar u ocultar con CSS.</li>
        <li><RouterLink to="/v-for">v-for</RouterLink>: repetir elementos a partir de una lista.</li>
        <li><RouterLink to="/v-key">v-bind:key</RouterLink>: identificar cada elemento dentro de un bucle.</li>
      </ul>
    </div>
  </section>
</template>
