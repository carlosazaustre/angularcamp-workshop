class SpeakerListController {
  constructor () {
    this.message = 'Hi ngErs!'
  }

  sayHello ({ speakerName }) {
    window.alert(`Hello ${speakerName}!`)
  }
}

export default SpeakerListController
