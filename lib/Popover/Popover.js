import {
  StateContainer,
  contentFactory,
  triggerFactory,
  withActiveState,
  withActive
} from '../State'

/**
 * The Tooltip component creates an expandable info container on hover.
 *
 * TODO:
 * - Check body overflow on render and adjust width if needed
 * - Dedupe Popover and Tooltip src files
 * - Ability to default configure link and button color for consuming app
 * - Match tooltip and popover tip styles and markup
 * @class Popover
 * @constructor
 * @extends React.Component
 */
export default withActive({ element: 'popover', mouseEvents: true })(
  class Popover extends StateContainer {
    static Content = withActiveState({ id: true, role: 'tooltip', hidden: true })(
      contentFactory({ tip: true })
    )
    static Toggle = withActiveState({ describedby: true, subscribe: false })(
      triggerFactory()
    )
  }
)