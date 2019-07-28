<template>
    <div class="map-component">
        Map Component
    </div>
</template>

<script>
import gmapsInit from '../utils/gmaps'
export default {
  name: 'MapComponent',
  async mounted () {
    this.$store.dispatch('getLatestLocationData')

    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }

        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
      })
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
.map-component {
    height: 100%;
}
</style>
