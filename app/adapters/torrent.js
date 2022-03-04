import ApplicationAdapter from './application';

export default class TorrentAdapter extends ApplicationAdapter {
  method = 'torrent-get';
  requiredFields = true;
}
