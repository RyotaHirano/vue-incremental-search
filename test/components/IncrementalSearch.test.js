import { mount } from '@vue/test-utils'
import IncrementalSearchComponent from './../../src/js/components/IncrementalSearch'

describe('Incremental Search Component', () => {
  test('is a vue component', () => {
    const wrapper = mount(IncrementalSearchComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})