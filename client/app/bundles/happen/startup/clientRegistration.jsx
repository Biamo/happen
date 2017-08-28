import ReactOnRails from 'react-on-rails';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import RouterApp from './ClientRouterApp';

import NavigationBarApp from './NavigationBarApp';

ReactOnRails.setOptions({
  traceTurbolinks: process.env.TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register({
  RouterApp,
  NavigationBarApp
});

// Initizalize all locales for react-intl.
addLocaleData([...en]);
