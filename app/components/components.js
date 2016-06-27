import angular from 'angular'
import speakerList from './speakerList'
import speakerItem from './speakerItem'

const components = angular
  .module('components', [
    speakerList,
    speakerItem
  ])
  .name

export default components
