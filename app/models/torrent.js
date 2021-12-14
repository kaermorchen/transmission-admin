import Model, { attr } from '@ember-data/model';

export default class TorrentModel extends Model {
  @attr('string') name;
}
