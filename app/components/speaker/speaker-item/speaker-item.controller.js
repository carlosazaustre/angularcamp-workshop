class SpeakerItemController {
  constructor () {}

  onClick () {
    this.onSayHello({
      $event: {
        speakerName: this.data.name
      }
    })
  }
}

export default SpeakerItemController
