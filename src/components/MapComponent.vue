<template>
    <div class="map-component">
        Map Component
    </div>
</template>

<script>
export default {
  name: 'MapComponent',
  mounted () {
    this.$store.dispatch('getLatestLocationData')
  }
}
</script>

<style>

</style>
