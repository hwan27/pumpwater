import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";
import { actionCreators as modemActions } from "../../redux/modules/modem";

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
    connect: number => {
      return dispatch(modemActions.connect(number));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
