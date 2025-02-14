import React from "react";
import { useDispatch } from "react-redux";
import { setAcabamentoAlvenaria } from "../redux/slices/pinturaSlice";

const PerguntaAlvenariaRepintura = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (acabamento) => {
    dispatch(setAcabamentoAlvenaria(acabamento));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>Qual o acabamento da tinta atual?</h2>
      <button onClick={() => handleSelect("fosco")} style={styles.button}>Fosco</button>
      <button onClick={() => handleSelect("acetinado")} style={styles.button}>Acetinado</button>
      <button onClick={() => handleSelect("semibrilho")} style={styles.button}>Semibrilho</button>
      <button onClick={() => handleSelect("emborrachado")} style={styles.button}>Emborrachado</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaAlvenariaRepintura;
