class SpeakerListController {
  constructor (SpeakerService) {
    this.speakerService = SpeakerService
  }

  $onInit () {
    this.speakerService.getSpeakers().then(data => (this.speakers = data))
  }
}

export { SpeakerListController }
