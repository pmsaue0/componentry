/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { mount } from 'enzyme'

import dt from './dt'

/**
 * Library default component requirment test suite.
 *
 * IMPORTANT NOTES
 * - Enzyme `find()` will find **EVERY** instance of a prop, this makes it difficult
 *   to assert on find lengths, because it will be variable for components with
 *   HOCs which is why we use `toBeTruthy` to only check that some instance of the
 *   expected element attr exists
 */

export default (TestComponent, enzymeOptions = {}) => {
  /*
   * Test that any html tag or component can be passed through the 'as' prop to
   * override the parent element the component renders
   */
  test('should render as specified html element or component', () => {
    // TODO: b/c we're passing link=true for State Trigger components, this throws
    // an error about passing a non-boolean value for attribute `link`
    // const htmlWrapper = mount(<TestComponent as="section" />, enzymeOptions)
    // expect(htmlWrapper.find('section').length).toBeTruthy()

    const TestAs = () => <section />
    const componentWrapper = mount(<TestComponent as={TestAs} />, enzymeOptions)
    expect(componentWrapper.find(TestAs).length).toBeTruthy()
  })

  /*
   * All components should spread passed props on the parent container for max
   * customization
   */
  test('should pass through classnames and attributes', () => {
    const wrapper = mount(
      <TestComponent className="test-custom" data-test="test-custom" />,
      enzymeOptions
    )
    expect(wrapper.find('.test-custom').length).toBeTruthy()
    expect(wrapper.find(dt('test-custom')).length).toBeTruthy()
  })
}
