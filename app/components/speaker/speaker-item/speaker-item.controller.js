/**
 * components/speaker/speaker-item/speaker-item.controller.js
 *
 * Controller for <speaker-item> component
 */

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
