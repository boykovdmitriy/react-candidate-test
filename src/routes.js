import { formatRoute } from 'react-router-named-routes';
import {toParams} from './utils/params';

export function defRoute(pattern) {
  return {
    pattern,
    url: (params, search = {}) => formatRoute(pattern, params) + toParams(search),
  };
}

export const ROOT = defRoute('/');
