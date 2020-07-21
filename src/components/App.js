import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Layout from "../common/Layout/Layout";
import Section from "../common/Section/Section";
import ContactForm from "./ContactForm/ContactFormContainer";
import Filter from "./Filter/FilterContainer";
import ContactList from "./ComtactList/ContactListContainer";
import ThemeToggler from "./ThemeToggler/ThemeTogglerContainer";

import Notification from "../common/Notification";

const App = ({ error }) => {
  return (
    <Layout>
      <ThemeToggler />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      {error && <Notification />}
    </Layout>
  );
};

App.propTypes = {
  error: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.contacts.error,
});

export default connect(mapStateToProps)(App);
