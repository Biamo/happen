import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BaseComponent from 'libs/components/BaseComponent';

import NavigationBar from '../components/NavigationBar/NavigationBar';

function stateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  if (state.$$happenStore) {
    return {
      pathname: state.railsContext.pathname,
    };
  }
  return { };
}

class NavigationBarContainer extends BaseComponent {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  render() {
    const { pathname } = this.props;

    return (
      <NavigationBar {...{ pathname }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(stateToProps)(NavigationBarContainer);
