import React, { useState } from 'react';
import Card from './components/card';
import Home from './feature/home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home/>
    </>



  );
}

export default App;
