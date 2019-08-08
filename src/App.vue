<template>
  <div id="app">
    <header class="flex justify-center mt-10">
      <p class="text-3xl">
        <strong class="text-4xl">Unapp</strong> – a directory of minimal and useful single-purpose apps.
      </p>
    </header>
    <router-view />
  </div>
</template>

<style>
html {
  background-color: #e6ecf0;
}
</style>

<style lang="scss" scoped>
#app {
  max-width: 600px;
  display: block;
  margin: 0 auto;

  strong {
    font-style: initial;
  }

  p {
    font-style: italic;
  }
}
</style>
