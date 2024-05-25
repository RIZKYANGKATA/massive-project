import React, { useState } from 'react';
import Card from './components/card';
import Home from './pages/home';
import About from './pages/about';
import Destinasi from './pages/destinasi';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home/> */}
      {/* <About/> */}
      <Destinasi/>
    </>



  );
}

export default App;
