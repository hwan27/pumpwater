import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    dispatchSector: () => {
      return dispatch(townActions.getSector(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Container);
