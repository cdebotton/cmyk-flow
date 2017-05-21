/* @flow */
/* eslint-disable react/no-danger */

import React from 'react';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  html: string,
};

const sheet = new ServerStyleSheet();

const Html = ({ html }: Props): React$Element<any> => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>CMYK</title>
      <style dangerouslySetInnerHTML={{ __html: sheet.getStyleTags(html) }} />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,400i,700,700i"
        rel="stylesheet"
      />
    </head>
    <body>
      <main id="app" dangerouslySetInnerHTML={{ __html: html }} />
      <script src="http://localhost:3001/bundle.js" />
    </body>
  </html>
);

export default Html;
