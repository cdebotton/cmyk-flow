/* @flow */
/* eslint-disable react/no-danger */

import React from 'react';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  html: string,
  state: { [key: string]: any },
};

const sheet = new ServerStyleSheet();

const Html = ({ html, state }: Props): React$Element<any> => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>CMYK</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,400i,700,700i"
        rel="stylesheet"
      />
      {sheet.getStyleElement(html)}
    </head>
    <body>
      <main id="app" dangerouslySetInnerHTML={{ __html: html }} />
      <script
        type="application/json"
        id="state"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(state) }}
      />
      <script src="http://localhost:3001/bundle.js" />
    </body>
  </html>
);

export default Html;
