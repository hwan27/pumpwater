import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "../../redux/modules/town";

// const mapStateToProps = (state, ownProps) => {
//   const {
//     town: { sector }
//   } = state;
//   return {
//     sector
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getSector: id => {
//       dispatch(townActions.getSector(id));
//     }
//   };
// };
export default connect()(Container);
