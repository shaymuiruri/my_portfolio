import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Experience from './components/experience/Experience.jsx';
import Myprojects from './components/myprojects/Myproject.jsx';
import './App.css';
import HeaderSocials from './components/header/HeaderSocials.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <Contacts />
      <Experience />
      <Myprojects />
      <Footer />
      <HeaderSocials/>
      
    </div>
  );
}

export default App;