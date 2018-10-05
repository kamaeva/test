

import React from 'react';
import Preloader from '../common/Preloader';

export default class Users extends React.Component{
  componentDidMount() {
    this.props.getDataList();
    console.log(this.props.users);
  }
  renderUsersList = (users) => {
    console.log(this.props);
    if(users.length === 0){
      return <tr><th style={{ textAlign: 'center' }} colSpan={'4'}>Nothing</th></tr>;
    }
    return(
      users.map(({ id, name, surname, desc }) => 
        <tr key= {id} className="table_row">
          <th>{id}</th>
          <th>{name}</th>
          <th>{surname}</th>
          <th>{desc}</th>
        </tr>
      )
    )
  }
  render(){
    const { usersList, usersFetchState} = this.props;
    return(
      <table className="table">
        <tbody>
          <tr className="table_title">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Description</th>
          </tr>
          { usersFetchState === 'request' ? <tr><th cols="4"><Preloader/></th></tr> : this.renderUsersList(usersList) }
        </tbody>

      </table>
    );
  }
}