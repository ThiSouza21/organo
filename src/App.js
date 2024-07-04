import "./App.css";
import Banner from "./Components/Banner";
import FormColaborator from "./Components/FormColaborator";
import { useState } from "react";
import TeamColaborator from "./Components/TeamColaborator";
import Footer from "./Components/Footer";

function App() {
  const [colaborators, setColaborators] = useState([]);
  const [teams, setTeams] = useState([]);

  const handleSetTeams = (newColaborator) => {
    const teamName = newColaborator["dropDownCol"];
    if (
      !teams.some((team) => teamName === team.teamExisting) &&
      teamName !== ""
    ) {
      setTeams((prevTeams) => [
        ...prevTeams,
        {
          teamExisting: teamName,
          colorTeam: {
            colorPrimary: newColaborator.colorTransformed,
            colorSecondary: newColaborator.colorSecondary,
          },
        },
      ]);
    }
  };

  const handleApplyNewColaborators = (newColaborator) => {
    handleSetTeams(newColaborator);
    setColaborators((prevCol) => [...prevCol, { ...newColaborator }]);
  };

  return (
    <div className="App">
      <Banner />
      <div className="wrapperContainerFormSetColaborator">
        <FormColaborator
          team={teams}
          handleSetNewColaborators={(colaborators) =>
            handleApplyNewColaborators(colaborators)
          }
        />
      </div>

      {teams.length !== 0 &&
        teams.map((team, index) => {
          const teamSectionNow = team.teamExisting;
          return (
            <TeamColaborator
              key={`${team.teamExisting}${index}`}
              team={team}
              teamSection={team.teamExisting}
              isColaborator={colaborators.filter((colaborator) => {
                return colaborator["dropDownCol"] === teamSectionNow;
              })}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
