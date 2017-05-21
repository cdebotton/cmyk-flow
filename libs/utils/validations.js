/* @flow */

export const required = (value: string): ?string => {
  if (!value || value.trim() === '') {
    return 'Required';
  }

  return null;
};
