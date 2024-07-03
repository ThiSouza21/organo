import TextField from "../TextField";
import DropDownTeam from "../DropDownTeam";
import ButtonForm from "../ButtonForm";
import { useState } from "react";

const FormColaborator = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [dropDownCol, setDropDownCol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSetNewColaborators([name, cargo, image, dropDownCol]);
    setName("");
    setCargo("");
    setImage("");
    setDropDownCol("");
    console.log("Os dados dos Cards foram enivados");
  };

  return (
    <form onSubmit={handleSubmit} className="containerFormSetColaborator">
      <h3>Preencha os dados para criar o card do colaborador.</h3>
      <TextField
        isRequired={true}
        labelName="Nome"
        typeInput="name"
        inputPlaceholder="Digite seu nome..."
        changedInputValue={(valueInput) => setName(valueInput)}
        valueStateInput={name}
      />
      <TextField
        isRequired={true}
        labelName="Cargo"
        typeInput="cargo"
        inputPlaceholder="Digite seu cargo..."
        changedInputValue={(valueInput) => setCargo(valueInput)}
        valueStateInput={cargo}
      />
      <TextField
        isRequired={true}
        labelName="Imagem"
        typeInput="image"
        inputPlaceholder="Insira o endereço da imagem..."
        changedInputValue={(valueInput) => setImage(valueInput)}
        valueStateInput={image}
      />
      <DropDownTeam
        labelName="Time"
        arrayCategoryTeams={[
          "Progamação",
          "Front-End",
          "Back-End",
          "Devops",
          "UX e Design",
          "Mobile",
        ]}
        typeSelector="team"
        changedInputValue={(valueInput) => setDropDownCol(valueInput)}
        valueStateInput={dropDownCol}
      />
      <ButtonForm>Criar card</ButtonForm>
    </form>
  );
};

export default FormColaborator;
