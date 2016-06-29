/**
 * components/speaker/speaker-list/speaker-list.component.js
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './speaker-list.controller'

export const SpeakerListComponent = {
  bindings: {
    speakers: '<'
  },
  controller,
  template: `
    <ul class="collection">
      <speaker-item ng-repeat="speaker in $ctrl.speakers"
                    data="speaker"
                    on-say-hello="$ctrl.sayHello($event);">
      </speaker-item>
    </ul>
  `
}
