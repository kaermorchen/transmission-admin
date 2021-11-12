import Model, { attr } from '@ember-data/model';

export default class TorrentModel extends Model {
  @attr declare name: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    torrent: TorrentModel;
  }
}
