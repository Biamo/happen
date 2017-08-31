console.log('i loaded')
import ReactOnRails from 'react-on-rails';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import App from './App';
import RouterApp from './ClientRouterApp';

import routerHappenStore from '../store/routerHappenStore';

import NavigationBarApp from './NavigationBarApp';

ReactOnRails.setOptions({
  traceTurbolinks: process.env.TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register({
  App,
  RouterApp,
  NavigationBarApp
});

ReactOnRails.registerStore({
  routerHappenStore
});
// Initizalize all locales for react-intl.
addLocaleData([...en]);
