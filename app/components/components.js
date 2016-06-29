import angular from 'angular'

import SpeakersService from '../services/speakers.service'
import { SpeakerItemComponent } from './speakerItem.component'
import { SpeakerListComponent } from './speakerList.component'

const components = angular
  .module('app.components', [])
  .service('SpeakersService', SpeakersService)
  .component('speakerItem', SpeakerItemComponent)
  .component('speakerList', SpeakerListComponent)
  .name

export default components
