import { connect } from "react-redux";
import contactsActions from "../../modules/contacts/contactsActions";
import contactsSelectors from "../../modules/contacts/contactsSelectors";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
