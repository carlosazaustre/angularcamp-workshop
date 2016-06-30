/**
 * common/common.js
 *
 * Module that contains the common components for the application.
 */

import angular from 'angular'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

const common = angular
  .module('app.common', [])
  .component('acHeader', HeaderComponent)
  .component('acFooter', FooterComponent)
  .name

export default common
