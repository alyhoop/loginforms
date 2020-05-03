import React from 'react';
import Header from './components/Header/Header';
import { UserForm } from './components/UserForm/UserForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <UserForm />
    </div>
  );
}

export default App;
