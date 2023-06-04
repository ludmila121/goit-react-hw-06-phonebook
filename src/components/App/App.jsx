import { AppContainer } from './App.styled';
import { GlobalStyle } from '../../GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
export default App;
