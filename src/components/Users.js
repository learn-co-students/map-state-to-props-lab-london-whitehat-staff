import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  state = {
    users: {}
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(function(user, i) {
            return (
            <li key={i} value={user.username}>
              {user.username}
            </li>
            )
          })}
        </ul>
        <p>{`Total count of users is ${this.props.userCount}`}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    userCount: state.users.length
  }
};



export default connect(mapStateToProps)(Users)
