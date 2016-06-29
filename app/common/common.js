import angular from 'angular'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'

const common = angular
  .module('app.common', [])
  .component('acHeader', HeaderComponent)
  .component('acFooter', FooterComponent)
  .name

export default common
