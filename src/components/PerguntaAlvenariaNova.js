import React from "react";
import { useDispatch } from "react-redux";
import { setLocalAlvenaria } from "../redux/slices/pinturaSlice";

const PerguntaAlvenariaNova = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelect = (local) => {
    dispatch(setLocalAlvenaria(local));
    onNext();
  };

  return (
    <div style={styles.container}>
      <h2>A parede é em área interna ou externa?</h2>
      <button onClick={() => handleSelect("interna")} style={styles.button}>Interna</button>
      <button onClick={() => handleSelect("externa")} style={styles.button}>Externa</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaAlvenariaNova;
