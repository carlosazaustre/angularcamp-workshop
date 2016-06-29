/**
 * components/speaker/index.js
 * Module that contains the speakers components and service and configure the routed component for
 * /speakers path route.
 */

import angular from 'angular'

import { SpeakerItemComponent } from './speaker-item/speaker-item.component'
import { SpeakerListComponent } from './speaker-list/speaker-list.component'
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component'
import SpeakerService from './speaker.service'

const speaker = angular
  .module('speakers', [])
  .service('SpeakerService', SpeakerService)
  .component('speakerItem', SpeakerItemComponent)
  .component('speakerList', SpeakerListComponent)
  .component('speakerDetail', SpeakerDetailComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('speakers', {
        url: '/',
        component: 'speakerList',
        resolve: {
          speakers: SpeakerService => SpeakerService.getSpeakers()
        }
      })
      .state('speaker', {
        url: '/speakers/:id',
        component: 'speakerDetail',
        resolve: {
          speaker: (SpeakerService, $stateParams) => SpeakerService.getSpeaker($stateParams.id)
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name

export default speaker
