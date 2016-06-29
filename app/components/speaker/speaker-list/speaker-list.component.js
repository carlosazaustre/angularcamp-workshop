/**
 * components/speaker/speaker-list/speaker-list.component.js
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

export const SpeakerListComponent = {
  bindings: {
    speakers: '<'
  },
  template: `
    <ul>
      <speaker-item ng-repeat="speaker in $ctrl.speakers" data="speaker"></speaker-item>
    </ul>
  `
}
