import JSONSerializer from '@ember-data/serializer/json';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const key = pluralize(primaryModelClass.modelName);

    payload = payload.arguments[key];

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
