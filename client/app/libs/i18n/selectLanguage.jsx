import React from 'react';

import { defaultLocale } from 'libs/i18n/default';

const SelectLanguage = (onChange, locale = defaultLocale) => (
  <select onChange={(e) => onChange(e.target.value)} value={locale} >
    <option value="en">English</option>
    <option value="de">French</option>
  </select>
);

export default SelectLanguage;
