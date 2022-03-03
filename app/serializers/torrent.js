import ApplicationSerializer from './application';

export default class TorrentSerializer extends ApplicationSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.arguments.torrents;

    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
