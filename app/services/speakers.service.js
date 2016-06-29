export default class SpeakersService {
  constructor ($http) {
    this.$http = $http
  }

  getSpeakers () {
    console.log('SepakersService getSpeaker()')
    return this.$http.get('/api/speakers').then(response => response.data)
  }
}
