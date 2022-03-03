import Adapter from '@ember-data/adapter';
import transformKey from 'transmission-admin/utils/transform-key';

export default class ApplicationAdapter extends Adapter {
  host = 'http://localhost:9091';
  namespace = 'transmission/rpc';
  sessionId = null;
  requiredFields = false;

  async findAll(store, type) {
    return this.ajax(type);
  }

  async getRequest(type) {
    const url = `${this.host}/${this.namespace}`;
    const args = {};
    const method = `${type.modelName}-get`;

    if (this.requiredFields) {
      const fields = ['id'];

      type.eachAttribute((key, meta) => {
        fields.push(transformKey(key, meta.options.keyType));
      });
      args.fields = fields;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({ arguments: args, method }),
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
