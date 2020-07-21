import { connect } from "react-redux";
import contactsSelectors from "../../modules/contacts/contactsSelectors";
import contactsActions from "../../modules/contacts/contactsActions";
import contactsOperations from "../../modules/contacts/contactsOperations";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  showNotif: contactsActions.addContactError,
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
