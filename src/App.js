import React from 'react';
import Home from './pages/Home';

const App = () => {

  function loading () {
    setInterval(() => {
      document.querySelector(" .loading__wrapper").style.opacity = 0;
    }, 2000);

    setInterval(() => {
      document.querySelector(" .loading__wrapper").style.display = "none";
    }, 2300);
  }
  return (
    <div onLoad={loading}>
      <Home/>
    </div>
  );
}

export default App;

