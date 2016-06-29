/**
 * components/speaker/speaker-detail/speaker-detail.js
 * Stateful component that represents a detail view for a Speaker.
 */

export const SpeakerDetailComponent = {
  bindings: {
    speaker: '<'
  },
  template: `
    <article>
      <header>
        <h1>{{$ctrl.speaker.name}}</h1>
      </header>
      <figure>
        <img width="250px" src="{{$ctrl.speaker.photo}}" alt="{{$ctrl.speaker.name}}" />
      </figure>
      <section>
        <ul>
          <li><strong>Talk:</strong> {{$ctrl.speaker.talk}}</li>
          <li><strong>Complexity</strong> {{$ctrl.speaker.complexity}}</li>
          <li><strong>Country:</strong> {{$ctrl.speaker.country}}</li>
        </ul>
        <p>{{$ctrl.speaker.description}}</p>
      </section>
    </article>
  `
}
