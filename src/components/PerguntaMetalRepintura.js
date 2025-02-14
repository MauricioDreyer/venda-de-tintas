import React from "react";

const PerguntaMetalRepintura = ({ onNext }) => {
  return (
    <div style={styles.container}>
      <h2>Para repintura em metal, utilize:</h2>
      <ul style={styles.list}>
        <li>Convertedor de Ferrugem (se necessário)</li>
        <li>Lixas</li>
        <li>Tinta Esmalte Sintético (base solvente ou base d’água)</li>
      </ul>
      <button style={styles.button} onClick={onNext}>Continuar</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  list: { textAlign: "left", display: "inline-block" },
  button: { marginTop: "20px", padding: "10px 20px", fontSize: "16px" },
};

export default PerguntaMetalRepintura;
