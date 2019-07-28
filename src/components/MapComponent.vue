<template>
    <div class="map-component">
        Map Component
    </div>
</template>

<script>
import gmapsInit from '../utils/gmaps'
export default {
  name: 'MapComponent',
  props: {
    locations: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      google: null,
      geocoder: null,
      map: null,
      markers: null
    }
  },
  watch: {
    locations: function (newLocations, oldLocations) {
      if (newLocations.length > 0 && this.google) {
        this.updateMarkers()
      }
    }
  },
  methods: {
    updateMarkers () {
      try {
        const markerClickHandler = marker => {
          this.map.setZoom(13)
          this.map.setCenter(marker.getPosition())
        }

        this.markers = this.locations
          .map(location => {
            const marker = new this.google.maps.Marker({
              position: {
                lat: location.latitude,
                lng: location.longitude
              },
              map: this.map })
            marker.addListener('click', () => {
              markerClickHandler(marker)
              const infoWindow = new this.google.maps.InfoWindow({
                content: location.name
              })
              infoWindow.open(this.map, marker)
            })

            return marker
          })
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted () {
    try {
      this.google = await gmapsInit()
      this.geocoder = new this.google.maps.Geocoder()
      this.map = new this.google.maps.Map(this.$el)

      this.geocoder.geocode({ address: 'United Kingdom' }, (results, status) => {
        // console.log(status, results)
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }

        this.map.setCenter(results[0].geometry.location)
        this.map.fitBounds(results[0].geometry.viewport)
      })
    } catch (error) {
      console.error(error)
    }
    this.updateMarkers()
  }
}
</script>

<style>
.map-component {
    height: 100%;
}
</style>
