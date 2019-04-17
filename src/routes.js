import { formatRoute } from 'react-router-named-routes';
import {joinUrlParts} from './utils/urlTools';
import {toParams} from './utils/params';

export function defRoute(pattern) {
  return {
    pattern,
    url: (params, search = {}) => formatRoute(pattern, params) + toParams(search),
  };
}

export const ROOT = defRoute('/');
export const DETAILS_PAGE = defRoute(joinUrlParts(ROOT.pattern, 'login'));
