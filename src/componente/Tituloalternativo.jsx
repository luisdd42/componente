import { Titulo } from "./titulo";

export const Tituloalternativo = ({ condicion }) => {
  if (condicion) {
    return (
      <>
        <Titulo titulo={"Titulo alterno"} />
      </>
    );
  }
  return (
    <>
      <Titulo titulo={"Titulo original"} />
    </>
  );
};
