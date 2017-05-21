/* @flow */

import { modularScale } from 'polished';

const typography = {
  fonts: {
    condensed: "'Open Sans Condensed', sans-serif",
    regular: "'Open Sans', sans-serif",
  },
};

const measurements = {
  verticalSpace: modularScale(-2),
  horizontalSpace: modularScale(-1),
};

export default {
  typography,
  measurements,
};
