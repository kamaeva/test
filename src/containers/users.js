
import { connect } from 'react-redux';
import Users from '../components/Users/index';
import { getDataList } from '../actions/users';

const mapStateToProps = state => ({
  usersFetchState: state.users.usersListFetchingState,
  /*
   * здесь надо обращатяся к ueserList через
   * state.users.usersList
   *
   * чтобы было проще понимать к какому свойству стора обращаться
   * используют плагин для браузера redux dev tools
   * или как-то так. его подключают в главно файле как мидлваре.
   * в документации написанно как подключить, но если что, прашивай
   */
  usersList: state.users.usersList,
});

export default connect(mapStateToProps, { getDataList })(Users);
