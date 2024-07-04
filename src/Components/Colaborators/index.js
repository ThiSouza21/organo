import "./Colaborators.css";

const Colaborators = ({ myColaborator }) => {
  return (
    <div className="colaborators">
      <div
        className="colaboratorsTop"
        style={{ backgroundColor: myColaborator.colorTransformed }}
      >
        <img src={myColaborator.image} alt={myColaborator.name} />
      </div>
      <div className="colaboratorsContent">
        <h3>{myColaborator.name}</h3>
        <p>{myColaborator.cargo}</p>
      </div>
    </div>
  );
};

export default Colaborators;
