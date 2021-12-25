import Model, { attr } from '@ember-data/model';

const statusNames = new Map([
  [0, 'Torrent is stopped'],
  [1, 'Queued to check files'],
  [2, 'Checking files'],
  [3, 'Queued to download'],
  [4, 'Downloading'],
  [5, 'Queued to seed'],
  [6, 'Seeding'],
]);

export default class TorrentModel extends Model {
  @attr('string') name;
  @attr('number') status;

  get statusName() {
    return statusNames.get(this.status) ?? null;
  }
}
