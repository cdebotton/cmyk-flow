/* @flow */

import type { StoreEnhancer } from 'redux';

declare module 'redux-devtools-extension' {
  declare function composeWithDevTools<S, A>(...fns: Array<StoreEnhancer<S, A>>): Function;
}
