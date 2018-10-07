import React from 'react';

export default class Items extends React.Component {
	render(){
		const { users, usersPerPage, currentPage } = this.props;
		const indexOfLastUser = currentPage * usersPerPage;
	    const indexOfFirstUser = indexOfLastUser - usersPerPage;
	    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

		return currentUsers.map(({ id, name, surname, desc }) => 
	        <tr key= {id} className="table_row">
	          <th>{id}</th>
	          <th>{name}</th>
	          <th>{surname}</th>
	          <th>{desc}</th>
	        </tr>
    	);
	}
}