import Model, { attr } from '@ember-data/model';

export default class SessionStatsModel extends Model {
  @attr('number') activeTorrentCount;
  @attr('number') downloadSpeed;
  @attr('number') pausedTorrentCount;
  @attr('number') torrentCount;
  @attr('number') uploadSpeed;
  @attr({ keyType: 'dash' }) cumulativeStats;
  @attr({ keyType: 'dash' }) currentStats;
}
