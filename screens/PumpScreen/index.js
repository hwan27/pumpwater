import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";
import { actionCreators as modemActions } from "../../redux/modules/modem";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    town: { sectorFeed }
  } = state;
  return {
    sectorFeed
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // getFeed: () => {
    //   dispatch(townActions.getFeed());
    // },
    getSector: id => {
      dispatch(townActions.getSector(id));
    },
    logout: () => {
      dispatch(userActions.logout());
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
