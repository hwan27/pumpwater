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
    //connect: () => {
    //  return dispatch(modemActions.connect());
    //},
    updatePressure: (sector_id, pressure) => {
      return dispatch(townActions.updatePressure(sector_id, pressure));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
