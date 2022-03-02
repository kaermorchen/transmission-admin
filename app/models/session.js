import Model, { attr } from '@ember-data/model';

export default class SessionModel extends Model {
  @attr('number', { keyType: 'dash' }) altSpeedDown;
}
