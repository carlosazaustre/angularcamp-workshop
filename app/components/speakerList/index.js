import angular from 'angular'
import { SpeakerListComponent } from './speaker-list.component'
import { SpeakerService } from './speaker.service'

const speakerList = angular
  .module('speakerList', [
    SpeakerService
  ])
  .component('speakerList', SpeakerListComponent)
  .name

export default speakerList
