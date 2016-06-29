/**
 * components/speaker/speaker-detail/speaker-detail.js
 * Stateful component that represents a detail view for a Speaker.
 */

export const SpeakerDetailComponent = {
  bindings: {
    speaker: '<'
  },
  template: `
    <article class="card">
      <figure class="card-image">
        <img width="250px" src="{{$ctrl.speaker.photo}}" alt="{{$ctrl.speaker.name}}" />
        <span ng-click="$ctrl.onClick();" class="card-title">{{$ctrl.speaker.name}}</span>
      </figure>
      <section class="card-content">
        <h5>{{$ctrl.speaker.talk}}</h5>
        <p>{{$ctrl.speaker.description}}</p>
      </section>
      <aside class="card-action">
        <a href="#">{{$ctrl.speaker.complexity}}</a>
      </aside>
    </article>
  `
}
