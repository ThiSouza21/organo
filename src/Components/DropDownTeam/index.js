import "./DropDownTeam.css";

const DropDownTeam = (props) => {
  const handleInputChanged = (e) => {
    props.changedInputValue(e.target.value);
  };

  return (
    <div className="dropDownTeam">
      <label htmlFor={props.typeSelector}>{props.labelName}</label>
      <select
        value={props.valueStateInput}
        onChange={handleInputChanged}
        id={props.typeSelector}
      >
        {props.arrayCategoryTeams.map((team) => (
          <option key={team}>{team}</option>
        ))}
      </select>
    </div>
  );
};
export default DropDownTeam;
