<template>
  <div class="app">
    <h1>Vue X ESLint x Babel x prettier</h1>
    <sub-component :message="`webpack project`" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'sub-component': () =>
      import(/* webpackChunkName: "SubComponent" */ './SubComponent'),
  },
}
</script>

<style scoped>
h1 {
  font-size: 5vw;
}

.app {
  text-align: center;
  font-family: sans-serif;
}
</style>
