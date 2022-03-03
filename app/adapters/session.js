import ApplicationAdapter from './application';

export default class SessionAdapter extends ApplicationAdapter {
  async queryRecord(store, type /*, query */) {
    return this.ajax(type);
  }
}
