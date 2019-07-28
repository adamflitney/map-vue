<template>
    <div class="map-component">
        <div class="map-container" ref="map"></div>
        <div class="location-list">
            <ul>
                <button >
                    <li
                    v-for="marker in markers"
                    :key="marker.title"
                    @click="selectLocation(marker)"
                    :class="{ selected: isSelected(marker) }"
                    >{{marker.title}}</li>
                </button>
            </ul>
        </div>
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
      markers: null,
      selectedMarker: null
    }
  },
  watch: {
    locations: function (newLocations, oldLocations) {
      if (newLocations.length > 0 && this.google) {
        this.updateMarkers()
      }
    }
  },
  computed: {

  },
  methods: {
    updateMarkers () {
      try {
        const markerClickHandler = marker => {
          this.map.setCenter(marker.getPosition())
        }

        this.markers = this.locations
          .map(location => {
            const marker = new this.google.maps.Marker({
              position: {
                lat: location.latitude,
                lng: location.longitude
              },
              map: this.map,
              title: location.name })
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
    },
    selectLocation (marker) {
      this.selectedMarker = marker
      this.map.setCenter(marker.getPosition())
    },
    isSelected (marker) {
      if (this.selectedMarker) {
        return marker.title === this.selectedMarker.title
      } else {
        return false
      }
    }
  },
  async mounted () {
    try {
      this.google = await gmapsInit()
      this.geocoder = new this.google.maps.Geocoder()
      this.map = new this.google.maps.Map(this.$refs.map)

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

<style scoped>
.location-list {
    max-height: 100vh;
    overflow-y: scroll;
}

.location-list ul {
    width: fit-content;
    padding: 0;
    margin: 0;
}

.location-list li {
    list-style: none;
    padding: 1rem 2rem;
    text-align: center;
    font-size: 1.5rem;
}

.location-list li:hover,
.selected {
    background-color: #2d3d50;
    color: #fff;
}

button {
    background-color: #fff;
    border-style: none;
    padding: 0;
    margin: 0;
}

@media only screen and (max-width: 600px) {
  .location-list ul {
    width: 100%;
}
button {
    width: 100%;
}
}
</style>

<style>
*:focus {
    outline: none;
}

.map-component {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr fit-content(20%);
}

.map-container {
    height: 100%;
}

@media only screen and (max-width: 600px) {
  .map-component {
      grid-template-columns: 1fr;
    grid-template-rows: 1fr fit-content(20%);
}
}

</style>
