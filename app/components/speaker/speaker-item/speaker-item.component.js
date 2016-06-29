/**
 * components/speaker/speaker-item/speaker-item.component.js
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

export const SpeakerItemComponent = {
  bindings: {
    data: '<'
  },
  template: `
    <li>
      <figure>
        <img width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
      </figure>
      <div>
        <h3>{{$ctrl.data.name}}</h3>
        <p>{{$ctrl.data.country}}</p>
        <p>{{$ctrl.data.talk}}</p>
      </div>
    </li>
  `
}
