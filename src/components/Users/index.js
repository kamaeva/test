import React from 'react';
import Preloader from '../common/Preloader';
import Pagination from '../common/Pagination';
import NoDataItem from '../common/NoDataItem';
import Items from './UsersItems';

export default class Users extends React.Component{
  constructor() {
    super();
    this.state = {
      currentPage: localStorage.getItem('currentPage') || 1,
      usersPerPage: 5
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(event) {
    localStorage.setItem('currentPage', Number(event.target.id));
    // console.log(localStorage.getItem('currentPage'));
    this.setState({currentPage: Number(event.target.id)});
  }
  componentDidMount() {
    this.props.getDataList();
  }

  // renderUsersList = (users) => {
  //   if(users.length === 0){
  //     return <tr><th style={{ textAlign: 'center' }} colSpan={'4'}>Nothing</th></tr>;
  //   }
  //   const { currentPage, usersPerPage } = this.state;
  //   const indexOfLastUser = currentPage * usersPerPage;
  //   const indexOfFirstUser = indexOfLastUser - usersPerPage;
  //   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //   return currentUsers.map(({ id, name, surname, desc }) => 
  //       <tr key= {id} className="table_row">
  //         <th>{id}</th>
  //         <th>{name}</th>
  //         <th>{surname}</th>
  //         <th>{desc}</th>
  //       </tr>
  //   )
  // }

  render(){
    const { usersList, usersFetchState, usersLastPage } = this.props;
    const { usersPerPage, currentPage } = this.state;
    return(
      <React.Fragment>
        <table className="table">
          <tbody>
            <tr className="table_title">
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Description</th>
            </tr>
            { usersFetchState === 'request' ? 
              <tr><th rowSpan="4" colSpan="4"><Preloader/></th></tr> 
              :
              usersList.length === 0 ?
                <NoDataItem/>
                :
                <Items
                  users ={usersList} 
                  usersPerPage = {usersPerPage}
                  currentPage = {currentPage}
                />
            }
          </tbody>
        </table>
        {usersLastPage > 1 &&
          <Pagination
            pageChange={this.handlePageChange}
            lastPage={usersLastPage}
          />  
        }
      </React.Fragment>
    );
  }
}
//this.renderUsersList(usersList)