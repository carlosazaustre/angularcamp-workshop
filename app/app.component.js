/**
 * app.component.js
 *
 * Root component that defines the base element for the entire application
 */

export const AppComponent = {
  template: `
    <ac-header></ac-header>
    <div ui-view></div>
    <ac-footer></ac-footer>
  `
}
