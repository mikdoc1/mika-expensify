import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutStart, logout } from '../actions/auth';


export const Header = (props) => {
  return (
      <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={props.onLogout}>Logout</button>
      </header>
  )

};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logoutStart()),
  }
};

export default connect(null, mapDispatchToProps)(Header);
