/* @flow */

export type Location = {|
  +pathname: string,
  +search: string,
  +hash: string,
|};

type LocationChange = {|
  type: 'router/LOCATION_CHANGE',
  +payload: Location,
|};

type CallHistoryMethod = {|
  type: 'router/CALL_HISTORY_METHOD',
  +payload: {|
    +method: string,
    +args: any[],
  |},
|};

export type Action = LocationChange | CallHistoryMethod;

export type State = {
  location: ?Location,
};
