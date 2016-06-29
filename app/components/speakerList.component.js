class SpeakerListController {
  constructor () {}

  /*$onInit () {
    this.speakers = []
    this.speakerService.getSpeakers().then(data => this.speakers = data)
  }*/
}

export const SpeakerListComponent = {
  bindings: {
    speakers: '<'
  },
  controller: SpeakerListController,
  template: `
    <ul>
      <speaker-item ng-repeat="speaker in $ctrl.speakers" data="speaker"></speaker-item>
    </ul>
  `
}
