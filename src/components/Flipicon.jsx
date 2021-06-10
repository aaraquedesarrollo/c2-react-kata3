import { useState } from "react";

export const Flipicon = (props) => {
  const [claseIcono, setClaseIcono] = useState(props.icono1);

  const cambiarIcono = () => {
    if (claseIcono === props.icono1) {
      setClaseIcono(props.icono2);
    } else {
      setClaseIcono(props.icono1);
    }
  };

  return <i className={"fas " + claseIcono} onClick={cambiarIcono}></i>;
};
