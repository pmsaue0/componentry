import React from 'react'
import { bool, shape, string } from 'prop-types'
import classNames from 'classnames'
import nanoid from 'nanoid'

/**
 * Render an SVG icon using an external definition set.
 *
 * ## Default Font Configurations
 * This component is configured to behave as a font icon system by default using the
 * `.font` class. The baseline for the component is adjusted to properly align icons
 * with text.
 *
 * This component can also be used to render font icons as standalone display icons.
 * In these cases, it is typically not desired for the icon baseline to be adjusted,
 * and this can be prevented by passing `font={false}`.
 *
 * ## A++ Accessibility Considerations
 * In order to make SVG font icons as accessible as possible this component:
 * - Includes `role="img"` on the SVG element for older browsers
 * - Maps an `aria-labelledby` attribute on the SVG element to a unique id on the
 *   title element for older browsers.
 * - Falls back to the icon id as the SVG element's `<title>` if no title is passed
 *   to the component.
 *
 * The fallback title is provided to ensure the element has _some_ title for screen
 * readers, however a descriptive title should always be passed in that conveys the
 * intent of the element. For example, an umbrella icon that shows the weather when
 * clicked should have a title like: 'See current weather', instead of a title like
 * 'Umbrella icon'.
 *
 * ## Fingerprinting
 * We recommend providing the SVG filepath by importing the icons in your app index
 * and passing the filepath through the `<ThemeProvider>`, if you're using Webpack
 * this will ensure that your icons are fingerprinted.
 */

Icon.contextTypes = {
  COMPONENTRY_THEME: shape({
    svgDefinitionsFilePath: string
  })
}

Icon.propTypes = {
  className: string,
  filePath: string,
  font: bool,
  icon: string.isRequired,
  title: string
}

Icon.defaultProps = {
  font: true
}

export default function Icon(
  { className, filePath, font, icon, title, ...rest },
  { COMPONENTRY_THEME: { svgDefinitionsFilePath = '/assets/icons.svg' } = {} } = {}
) {
  // Unique id used to bind svg title and aria-labelledby together
  // TODO: Is this still necessary with modern(ish) browsers?
  const guid = nanoid()
  const classes = classNames('icon', icon, className, { font })

  return (
    <svg className={classes} {...rest} role="img" aria-labelledby={guid}>
      <title id={guid}>{title || icon}</title>
      <use href={`${filePath || svgDefinitionsFilePath}#${icon}`} />
    </svg>
  )
}
