<template>
    <div class="map-page">
        <MapComponent />
    </div>
</template>

<script>
import MapComponent from '../MapComponent'
export default {
  name: 'MapPage',
  components: {
    MapComponent
  }
}
</script>

<style>
.map-page {
    height: 100%;
}
</style>
