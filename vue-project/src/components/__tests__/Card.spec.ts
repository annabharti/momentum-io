import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card renders as expected', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {
        props: { name: 'Test Mission', details: 'Test Details', rocket_name: 'Test Rocket', launch_year: '2021' }
    })
    expect(wrapper.text()).toContain('Test Mission')
    expect(wrapper.text()).toContain('Test Details')
    expect(wrapper.text()).toContain('Test Rocket')
    expect(wrapper.text()).toContain('2021')
  })
})
