import React from "react";
import { useDispatch } from "react-redux";
import { setTipoMadeira } from "../redux/slices/pinturaSlice";

const PerguntaMadeira = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (tipo) => {
    dispatch(setTipoMadeira(tipo));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>A madeira é nova ou será repintura?</h2>
      <button style={styles.button} onClick={() => handleSelect("nova")}>
        Madeira Nova
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

export default PerguntaMadeira;
