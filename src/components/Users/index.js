

import React from 'react';
import Preloader from '../common/Preloader';

export default class Users extends React.Component{
  componentDidMount() {
    this.props.getDataList();
    console.log(this.props.users);
  }
  renderUsersList = (usersList) => {
    console.log(usersList);//underfined
    this.props.getDataList();//пишет,что нет такой функции
    const users = Object.values(usersList);
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
    const { usersList, usersFetchState, usersLastPage } = this.props;
    return(
      <table className="table">
        <tbody>
          <tr className="table_title">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Description</th>
          </tr>
          console.log(users);
          { usersFetchState === 'request' ? <Preloader cols="4"/> : this.renderUsersList(usersList) }
        </tbody>

      </table>
    );
  }
}