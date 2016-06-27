import { SpeakerItemController as controller } from './speaker-item.controller'

export const SpeakerItemComponent = {
  controller: controller,
  template: `
    <li>
      <figure>
        <img width="96px" src="{{$ctrl.data.photo}}">
      </figure>
      <div>
        <h3>{{$ctrl.data.name}}</h3>
        <span>{{$ctrl.data.country}}</span>
        <span><em>{{$ctrl.data.talk}}</em></span>
      </div>
    </li>
  `
}
