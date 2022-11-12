import { useState, React } from "react";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "adrian", lastName: "cooke", age:39 }}
      />
    </div>
  );
};

export default App;
