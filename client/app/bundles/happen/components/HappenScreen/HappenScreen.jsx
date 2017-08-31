import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from 'libs/components/BaseComponent';
import css from './HappenScreen.scss';

export default class HappenScreen extends BaseComponent {

  static propTypes = {
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  renderNotification() {
    const { locationState } = this.props;

    if (!locationState || !locationState.redirectFrom) return null;

    return (
      <div className={`bg-success ${css.notification}`}>
        You have been redirected from
        <strong>
          {locationState.redirectFrom}
        </strong>
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {this.renderNotification()}
        <div>
          <div className="container">
            <a href="http://www.shakacode.com">
              <h3>
                <div className={css.logo} />
                Example of styling using image-url and Open Sans Light custom font
              </h3>
            </a>
            <a href="https://twitter.com/railsonmaui">
              <div className={css.twitterImage} />
              Rails On Maui on Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}
