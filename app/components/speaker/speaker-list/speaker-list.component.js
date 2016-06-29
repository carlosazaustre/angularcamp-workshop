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
