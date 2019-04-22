import qs from 'qs';

export function toParams(object) {
  return qs.stringify(object, { addQueryPrefix: true });
}
