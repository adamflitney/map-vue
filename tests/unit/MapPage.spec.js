import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MapPage from '@/components/pages/MapPage.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let actions = {
  getLatestLocationData: jest.fn()
}
let store = new Vuex.Store({
  actions
})

it('dispatches "getLatestLocationData" when it is created', () => {
  const wrapper = shallowMount(MapPage, { store, localVue })
  expect(actions.getLatestLocationData).toHaveBeenCalled()
})
