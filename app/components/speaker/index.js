import angular from 'angular'

import { SpeakerItemComponent } from './speaker-item/speaker-item.component'
import { SpeakerListComponent } from './speaker-list/speaker-list.component'
import SpeakerService from './speaker.service'

const speaker = angular
  .module('speakers', [])
  .service('SpeakerService', SpeakerService)
  .component('speakerItem', SpeakerItemComponent)
  .component('speakerList', SpeakerListComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('speakers', {
        url: '/speakers',
        component: 'speakerList',
        resolve: {
          speakers: SpeakerService => SpeakerService.getSpeakers()
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name

export default speaker
