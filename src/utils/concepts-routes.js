// @flow
const routes: Array<{ name: string, path: string, id: string }> = [
  {
    name: 'A++ Accessibility',
    path: '/concepts/accessibility',
    id: 'accessibility'
  },
  { name: 'Theme Customization', path: '/concepts/theming', id: 'theming' },
  { name: 'Component APIs', path: '/concepts/component-contract', id: 'apis' }
]

const conceptsRoutesMap = {}

routes.forEach(route => {
  conceptsRoutesMap[route.id] = route
})

export { conceptsRoutesMap }
export default routes
