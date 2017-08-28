// Example of React + Redux
import ReactOnRails from 'react-on-rails';

import App from './App';
import RouterApp from './ServerRouterApp';
import NavigationBarApp from './NavigationBarApp';
import routerHappenStore from '../store/routerHappenStore';
import happenStore from '../store/happenStore';

ReactOnRails.register(
  {
    App,
    RouterApp,
    NavigationBarApp,
  },
);

ReactOnRails.registerStore({
  routerHappenStore,
  happenStore,
});
