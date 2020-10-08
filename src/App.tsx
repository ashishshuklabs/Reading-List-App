import React from 'react';
import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { NewBook } from './components/NewBook';
import { BookContextProvider } from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
