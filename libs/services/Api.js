/* @flow */

import 'isomorphic-fetch';

type JSONType = string | number | { [key: string]: JSONType } | JSONType[];
type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const makeRequest = async (method: Method, uri: string, data?: JSONType): Promise<JSON | void> => {
  const response = await fetch(uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: data ? JSON.stringify(data) : null,
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error);
  }

  const result = await response.json();

  return result;
};

export default {
  authorize: (username: string, password: string) =>
    makeRequest('POST', '/api/login', { username, password }),
  logout: () => makeRequest('POST', '/api/logout'),
};
