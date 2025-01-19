import React from "react";
import testImage from "../public/testImage.png";

function App() {
  return (
    <div>
      App (updated)
      <img src={testImage} alt="sample" height={200} width={200}/>
    </div>
  )
};

export default App;