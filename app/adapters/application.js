import Adapter from '@ember-data/adapter';
import transformKey from 'transmission-admin/utils/transform-key';

export default class ApplicationAdapter extends Adapter {
  host = 'http://localhost:9091';
  namespace = 'transmission/rpc';
  sessionId = null;
  requiredFields = false;
  method = null;

  async findAll(store, type) {
    return this.ajax(type);
  }

  async queryRecord(store, type /*, query */) {
    return this.ajax(type);
  }

  async getRequest(type) {
    const url = `${this.host}/${this.namespace}`;
    const body = { arguments: {} };

    if (this.requiredFields) {
      body.arguments.fields = ['id'];

      type.eachAttribute((key, meta) => {
        body.arguments.fields.push(transformKey(key, meta.options.keyType));
      });
    }

    if (this.method) {
      body.method = this.method;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'X-Transmission-Session-Id': this.sessionId,
      },
    };

    return fetch(url, options);
  }

  async ajax(type) {
    let response = await this.getRequest(type);

    // CSRF Protection
    // https://github.com/transmission/transmission/blob/master/extras/rpc-spec.txt#L56
    if (response.status === 409) {
      this.sessionId = response.headers.get('X-Transmission-Session-Id');

      response = await this.getRequest(type);
    }

    return response.json();
  }
}
