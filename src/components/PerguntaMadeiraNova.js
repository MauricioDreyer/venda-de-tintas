import React from "react";
import { useDispatch } from "react-redux";
import { setAcabamentoMadeira } from "../redux/slices/pinturaSlice";

const PerguntaMadeiraNova = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (acabamento) => {
    dispatch(setAcabamentoMadeira(acabamento));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>O acabamento será com:</h2>
      <button style={styles.button} onClick={() => handleSelect("verniz")}>
        Verniz
      </button>
      <button style={styles.button} onClick={() => handleSelect("tinta esmalte sintético")}>
        Tinta Esmalte Sintético
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaMadeiraNova;
