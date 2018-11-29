import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return <li>Checking session</li>
        break;
      case false:
        return <li><a href="/api/google">Login with Google</a></li>
        break;
      default:
        return <li><a href="/api/logout">Log out</a></li>

    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{ this.renderContent() }</li>
          </ul>
        </div>
      </nav>
    )
  }

}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
