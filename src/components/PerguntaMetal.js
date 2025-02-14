import React from "react";
import { useDispatch } from "react-redux";
import { setTipoMetal } from "../redux/slices/pinturaSlice";

const PerguntaMetal = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (tipo) => {
    dispatch(setTipoMetal(tipo));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>A pintura no metal será nova ou repintura?</h2>
      <button style={styles.button} onClick={() => handleSelect("nova")}>
        Nova
      </button>
      <button style={styles.button} onClick={() => handleSelect("repintura")}>
        Repintura
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaMetal;
