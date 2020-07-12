import React from 'react';
import './App.css';

import title from './../src/img/title.png';


function App() {
  return (
    <div>
      <div className="App">Hello</div>
      {/* test */}
      <img src={title} alt="Logo" height = "60%" width= "100%" />
    </div>
  );
}

export default App;
