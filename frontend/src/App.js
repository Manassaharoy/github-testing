import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("http://localhost:3001/dev");
    console.log(response.data);
    setName(response.data);
  };

  return (
    <div className="App" style={{ margin: "15rem" }}>
      <p>
        THE MESSAGE FORM SERVER IS:
        <b> {name ? name : "No data"} </b>
      </p>
    </div>
  );
}

export default App;
