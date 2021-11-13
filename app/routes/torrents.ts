import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import fetch from 'fetch';

export default class Torrents extends Route {
  @service store!: Store;

  async model() {
    const data = {
      method: 'torrent-get',
      arguments: {
        fields: [
          'id',
          'name',
          'status',
          'hashString',
          'totalSize',
          'percentDone',
          'addedDate',
          'trackerStats',
          'leftUntilDone',
          'rateDownload',
          'rateUpload',
          'recheckProgress',
          'rateDownload',
          'rateUpload',
          'peersGettingFromUs',
          'peersSendingToUs',
          'uploadRatio',
          'uploadedEver',
          'downloadedEver',
          'downloadDir',
          'error',
          'errorString',
          'doneDate',
          'queuePosition',
          'activityDate',
        ],
      },
      tag: '',
    };

    return fetch('http://192.168.1.1/app/transmission/rpc', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((result) => result.json());
    // return this.store.findAll('torrent');
  }
}
