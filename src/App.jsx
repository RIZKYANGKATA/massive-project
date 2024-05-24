import React, { useState } from 'react';
import Card from './components/card';
import Home from './pages/home';
import About from './pages/about';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home/> */}
      <About/>
    </>



  );
}

export default App;
