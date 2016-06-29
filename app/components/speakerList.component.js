class SpeakerListController {
  constructor (SpeakersService) {
    this.speakerService = SpeakersService
  }

  $onInit () {
    this.speakers = []
    this.speakerService.getSpeakers().then(data => this.speakers = data)
  }
}

export const SpeakerListComponent = {
  controller: SpeakerListController,
  template: `
    <ul>
      <speaker-item ng-repeat="speaker in $ctrl.speakers" data="speaker"></speaker-item>
    </ul>
  `
}
