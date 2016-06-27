import angular from 'angular'
import { SpeakerListComponent } from './speaker-list.component'

const speakerList = angular
  .module('speakerList', [])
  .component('speakerList', SpeakerListComponent)
  .name

export default speakerList
