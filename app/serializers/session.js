import ApplicationSerializer from './application';

export default class SessionSerializer extends ApplicationSerializer {
  primaryKey = 'session-id';

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.arguments;

    return super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
