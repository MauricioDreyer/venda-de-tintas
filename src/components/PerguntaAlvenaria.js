import React from "react";
import { useDispatch } from "react-redux";
import { setTipoAlvenaria } from "../redux/slices/pinturaSlice";

const PerguntaAlvenaria = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (tipo) => {
    dispatch(setTipoAlvenaria(tipo));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>A pintura será em parede nova ou repintura?</h2>
      <button onClick={() => handleSelect("nova")} style={styles.button}>Parede Nova</button>
      <button onClick={() => handleSelect("repintura")} style={styles.button}>Repintura</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaAlvenaria;
