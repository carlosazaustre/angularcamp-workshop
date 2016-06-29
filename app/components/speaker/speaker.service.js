export default class SpeakerService {
  constructor ($http) {
    this.$http = $http
  }

  getSpeakers () {
    console.log('SepakerService getSpeaker()')
    return this.$http.get('/api/speakers').then(response => response.data)
  }
}
