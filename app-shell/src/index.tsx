import * as React from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { createPiral, Piral, SetRoute } from 'piral';
import { createContainersApi } from 'piral-containers';

const piral = createPiral({
  requestPilets() {
    return fetch('https://feed.piral.cloud/api/v1/pilet/products')
      .then((res) => res.json())
      .then((res) => res.items);
  },
  extendApi: [createContainersApi()],
});

const app = (
  <Piral instance={piral}>
    <SetRoute path="/" component={() => <Redirect from="/" to="/products" />} />
  </Piral>
);

render(app, document.querySelector('#app'));
