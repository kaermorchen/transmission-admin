import { camelize, dasherize } from '@ember/string';

export default function transformKey(key, keyType) {
  switch (keyType) {
    case 'camel':
      key = camelize(key);
      break;
    case 'dash':
      key = dasherize(key);
      break;
  }

  return key;
}
