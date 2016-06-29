/**
 * components/speaker/speaker.service.js
 * Service to fetch data from Speakers api
 */

export default class SpeakerService {
  constructor ($http) {
    this.$http = $http
  }

  getSpeakers () {
    return this.$http.get('/api/speakers').then(response => response.data)
  }
}
