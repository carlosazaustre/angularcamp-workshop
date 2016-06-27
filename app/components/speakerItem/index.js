import angular from 'angular'
import { SpeakerItemComponent } from './speaker-item.component'

const speakerItem = angular
  .module('speakerItem', [])
  .component('speakerItem', SpeakerItemComponent)
  .name

export default speakerItem
