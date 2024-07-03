import "./App.css";
import Banner from "./Components/Banner";
import FormColaborator from "./Components/FormColaborator";
import { useState } from "react";

function App() {
  const [colaborators, setColaborators] = useState([]);

  const handleApplyNewColaborators = (newColaborator) => {
    setColaborators([...colaborators, { ...newColaborator }]);
  };
  return (
    <div className="App">
      <Banner />
      <div className="wrapperContainerFormSetColaborator">
        <FormColaborator
          handleSetNewColaborators={(colaborators) =>
            handleApplyNewColaborators(colaborators)
          }
        />
      </div>
    </div>
  );
}

export default App;
