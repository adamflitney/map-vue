<template>
    <div class="map-page">
        <MapComponent :locations="locations" />
    </div>
</template>

<script>
import MapComponent from '../MapComponent'
export default {
  name: 'MapPage',
  components: {
    MapComponent
  },
  computed: {
    locations () {
      return this.$store.state.locationData
    }
  },
  created () {
    this.$store.dispatch('getLatestLocationData')
  }
}
</script>

<style>
.map-page {
    height: 100%;
}
</style>
