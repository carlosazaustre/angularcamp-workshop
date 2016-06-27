import angular from 'angular'
import speakerList from './speakerList'

const components = angular
  .module('components', [
    speakerList
  ])
  .name

export default components
