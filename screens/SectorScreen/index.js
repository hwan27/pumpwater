import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    town: { townFeed }
  } = state;
  return {
    townFeed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTown: id => {
      dispatch(townActions.getTown(id));
    },
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
