import React from "react";
import { useDispatch } from "react-redux";
import { setMaterial } from "../redux/slices/pinturaSlice";

const Home = ({ onNext }) => {
  const dispatch = useDispatch();

  const handleSelectMaterial = (material) => {
    dispatch(setMaterial(material));
    onNext(); // Avança para a próxima tela
  };

  return (
    <div style={styles.container}>
      <h2>Qual material será pintado?</h2>
      <button style={styles.button} onClick={() => handleSelectMaterial("alvenaria")}>
        Alvenaria
      </button>
      <button style={styles.button} onClick={() => handleSelectMaterial("madeira")}>
        Madeira
      </button>
      <button style={styles.button} onClick={() => handleSelectMaterial("metal")}>
        Metal
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { margin: "10px", padding: "10px 20px", fontSize: "16px" },
};

export default Home;
