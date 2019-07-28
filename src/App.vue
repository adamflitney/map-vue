<template>
  <div id="app">
    <MapPage />
  </div>
</template>

<script>
import MapPage from './components/pages/MapPage'

export default {
  name: 'app',
  components: {
    MapPage
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
