import angular from 'angular'

class Speaker {
  constructor ($http) {
    this.$http = $http
  }

  getSpeakers () {
    return this.$http.get('/api/speakers').then(response => response.data)
  }
}

export const SpeakerService = angular
  .module('SpeakerService', [])
  .service('SpeakerService', Speaker)
  .name
