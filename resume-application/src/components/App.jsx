import { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './Body';
import NewBody from './NewBody';

function App() {

  return (
    <div className="app-bg">
      <Header />

      <NewBody />

    </div>
  )
}


export default App
