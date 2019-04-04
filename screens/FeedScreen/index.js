import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";

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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
