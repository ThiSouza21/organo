import Colaborators from "../Colaborators";
import "./TeamColaborator.css";

const TeamColaborator = ({ isColaborator, teamSection, team }) => {
  return (
    <div
      className="teamColaborator"
      style={{
        backgroundColor: team.colorTeam.colorSecondary,
      }}
    >
      <section className="teamColaboratorContent">
        <h3
          style={{
            borderBottom: `2px solid ${team.colorTeam.colorPrimary}`,
          }}
        >
          {teamSection}
        </h3>
        <div className="teamColaboratorCards">
          {isColaborator.map((colaborator, index) => (
            <Colaborators
              key={`${colaborator.name}${index}`}
              colors={team.colorTeam}
              myColaborator={colaborator}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamColaborator;
