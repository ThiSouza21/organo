import "./TextField.css";

const TextField = (props) => {
  const handleInputChanged = (e) => {
    props.changedInputValue(e.target.value);
  };

  return (
    <div className="textField">
      <label htmlFor={props.typeInput}>{props.labelName}</label>
      <input
        onChange={handleInputChanged}
        required={props.isRequired}
        id={props.typeInput}
        type="text"
        placeholder={props.inputPlaceholder}
        value={props.valueStateInput}
      />
    </div>
  );
};

export default TextField;
