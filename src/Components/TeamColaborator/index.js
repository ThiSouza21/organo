import Colaborators from "../Colaborators";
import "./TeamColaborator.css";

const TeamColaborator = ({ isColaborator, teamSection }) => {
  return (
    <div
      className="teamColaborator"
      style={{
        backgroundColor: isColaborator[isColaborator.length - 1].colorSecondary,
      }}
    >
      <section className="teamColaboratorContent">
        <h3
          style={{
            borderBottom: `2px solid ${
              isColaborator[isColaborator.length - 1].colorTransformed
            }`,
          }}
        >
          {teamSection}
        </h3>
        <div className="teamColaboratorCards">
          {isColaborator.map((colaborator) => (
            <Colaborators key={colaborator.name} myColaborator={colaborator} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamColaborator;
