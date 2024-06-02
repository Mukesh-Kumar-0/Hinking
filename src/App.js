import React from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Mountaineering from './components/Mountaineering';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Mountaineering />
      </main>
      <Footer />
    </div>
  );
}

export default App;
