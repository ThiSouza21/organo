import TextField from "../TextField";
import DropDownTeam from "../DropDownTeam";
import ButtonForm from "../ButtonForm";
import { useState } from "react";

const FormColaborator = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [dropDownCol, setDropDownCol] = useState("");
  const [corTeamCol, setCorTeamCol] = useState("");

  let colorSecondary = "";

  const handleColorTransforms = (cor) => {
    switch (cor.toUpperCase()) {
      case "AMARELO":
        colorSecondary = "#FFF5D9";
        return "#FFBA05";
      case "VERMELHO":
        colorSecondary = "#FDE7E8";
        return "#E06B69";
      case "VERDE":
        colorSecondary = "#D9F7E9";
        return "#57C278";
      case "AZUL":
        colorSecondary = "#E8F8FF";
        return "#82CFFA";
      case "ROSA":
        colorSecondary = "#FAE9F5";
        return "#DB6EBF";
      case "LARANJA":
        colorSecondary = "#FFEEDF";
        return "#FF8A29";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colorTransformed = handleColorTransforms(corTeamCol);
    props.handleSetNewColaborators({
      name,
      cargo,
      image,
      dropDownCol,
      colorTransformed,
      colorSecondary,
    });

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
      <DropDownTeam
        labelName="Cor do Time"
        arrayCategoryTeams={[
          "Vermelho",
          "Verde",
          "Azul",
          "Laranja",
          "Rosa",
          "Amarelo",
        ]}
        typeSelector="cor-team"
        changedInputValue={(valueInput) => setCorTeamCol(valueInput)}
        valueStateInput={corTeamCol}
      />
      <ButtonForm>Criar card</ButtonForm>
    </form>
  );
};

export default FormColaborator;
