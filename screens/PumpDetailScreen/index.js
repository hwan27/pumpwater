import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as modemActions } from "../../redux/modules/modem";

const mapStateToProps = (state, ownProps) => {
  // const { modem } = state;
  // return {
  //   data: modem.data
  // };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // getModem: () => {
    //   dispatch(modemActions.getModem());
    // }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
