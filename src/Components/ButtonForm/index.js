import "./ButtonForm.css";

const ButtonForm = (props) => {
  return (
    <div className="buttonForm">
      <button type="submit">{props.children}</button>
    </div>
  );
};
export default ButtonForm;
