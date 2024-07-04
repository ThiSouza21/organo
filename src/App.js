import "./App.css";
import Banner from "./Components/Banner";
import FormColaborator from "./Components/FormColaborator";
import { useState } from "react";
import TeamColaborator from "./Components/TeamColaborator";

function App() {
  const [colaborators, setColaborators] = useState([]);
  const [teams, setTeams] = useState([]);

  const handleSetTeams = (newColaborator) => {
    const teamName = newColaborator["dropDownCol"];
    if (!teams.includes(teamName) && teamName !== "") {
      setTeams([...teams, teamName]);
    }
  };

  const handleApplyNewColaborators = (newColaborator) => {
    handleSetTeams(newColaborator);
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
        {teams.length !== 0 &&
          teams.map((team, index) => {
            const teamSectionNow = team;
            return (
              <TeamColaborator
                key={index}
                teamSection={team}
                isColaborator={colaborators.filter((colaborator) => {
                  return colaborator["dropDownCol"] === teamSectionNow;
                })}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
