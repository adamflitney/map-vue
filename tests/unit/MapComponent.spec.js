import { shallowMount } from '@vue/test-utils'
import MapComponent from '@/components/MapComponent.vue'

describe('MapComponent.vue', () => {
  it('renders a div with class map-component', () => {
    const wrapper = shallowMount(MapComponent)
    expect(wrapper.classes('map-component')).toBe(true)
  })
})
