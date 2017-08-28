import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

import NonRouterHappenContainer from '../containers/NonRouterHappenContainer';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('happenStore');

  return (
    <Provider store={store}>
      <NonRouterHappenContainer />
    </Provider>
  );
};
