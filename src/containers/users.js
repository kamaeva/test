
import { connect } from 'react-redux';
import Users from '../components/Users/index';
import { getDataList } from '../actions/users';

const mapStateToProps = state => ({
  usersFetchState: state.users.usersListFetchingState,
  usersList: Object.values(state.users.usersList),
});

export default connect(mapStateToProps, { getDataList })(Users);
