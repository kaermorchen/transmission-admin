import Adapter from '@ember-data/adapter';

export default class ApplicationAdapter extends Adapter {
  host = 'http://localhost:9091';
  namespace = 'transmission/rpc';
  sessionId = null;

  findAll(store, type) {
    return this.ajax(type);
  }

  getRequest(type) {
    const url = `${this.host}/${this.namespace}`;
    const fields = ['id', ...type.attributes.keys()];
    const options = {
      method: 'POST',
      body: JSON.stringify({
        arguments: { fields },
        method: `${type.modelName}-get`,
      }),
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
