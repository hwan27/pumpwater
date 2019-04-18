import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    town: { feed }
  } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(townActions.getFeed());
    },
    initApp: () => {
      dispatch(townActions.getFeed());
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
