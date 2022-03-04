import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    return hash({
      session: this.store.queryRecord('session', {}),
      sessionStats: this.store.queryRecord('session-stats', {}),
    });
  }
}
