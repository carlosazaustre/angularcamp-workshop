import angular from 'angular'
import { Header } from './header'
import { Footer } from './footer'

const common = angular
  .module('app.common', [])
  .component('header', Header)
  .component('footer', Footer)
  .name

export default common
