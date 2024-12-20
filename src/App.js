
import { useState } from 'react';
import './App.css';
import ContactDetails from './components/ContactDetails/ContactDetails';
import ContactList from './components/ContactUser/ContactList';

function App() {
  const [isShow, setIsShow] = useState(false);
  const [contactData, setContact] = useState(null)
  const onGetContact = (data) =>{
    setContact(data);
    setIsShow(true);
  }
  return (
    <div className="App">
      <ContactList
        onGetContact = {onGetContact}
      />
      {isShow && <ContactDetails data={contactData}/>}
    </div>
  );
}

export default App;
