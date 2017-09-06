import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

import './Layout.scss';

/* eslint-disable react/prefer-stateless-function */
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  /* eslint-disable react/no-unescaped-entities */
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Happen</a>
            </div>
            <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" >
                <li>
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/react-router" activeClassName="active">
                    Test React
                  </Link>
                </li>
                <li>
                  <Link to="/react-router/redirect" activeClassName="active">
                    Test Redirect
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
