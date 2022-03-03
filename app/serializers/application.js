import JSONSerializer from '@ember-data/serializer/json';
import transformKey from 'transmission-admin/utils/transform-key';

export default class ApplicationSerializer extends JSONSerializer {
  extractAttributes(modelClass, resourceHash) {
    let attributeKey;
    let attributes = {};

    modelClass.eachAttribute((key, meta) => {
      attributeKey = this.keyForAttribute(
        key,
        'deserialize',
        meta.options.keyType
      );
      if (resourceHash[attributeKey] !== undefined) {
        attributes[key] = resourceHash[attributeKey];
      }
    });

    return attributes;
  }

  keyForAttribute(key, method, keyType) {
    return transformKey(key, keyType);
  }
}
