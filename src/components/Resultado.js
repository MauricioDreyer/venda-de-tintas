import React from "react";
import { useSelector } from "react-redux";
import { setAcabamentoMadeira }from "../redux/slices/pinturaSlice";

const Resultado = () => {
  const material = useSelector((state) => state.pintura.material);
  const tipoMadeira = useSelector((state) => state.pintura.tipoMadeira);
  const acabamentoMadeira = useSelector((state) => state.pintura.acabamentoMadeira)
  const tipoAlvenaria = useSelector((state) => state.pintura.tipoAlvenaria);
  const localAlvenaria = useSelector((state) => state.pintura.localAlvenaria);
  const acabamentoAlvenaria = useSelector((state) => state.pintura.acabamentoAlvenaria);
  const tipoMetal = useSelector((state) => state.pintura.tipoMetal);

  let materiais = [];

  if (material === "madeira") {
    if (tipoMadeira === "nova") {
      if (acabamentoMadeira === "verniz")
        materiais = ["Selador para Madeira", "Verniz Brilhante ou Stain Acetinado"];
      else if (acabamentoMadeira === "tinta esmalte sintético")
        materiais = ["Selador para Madeira", "Tinta Esmalte Sintético Base Solvente ou Base D’água"]
      }
    else if (tipoMadeira === "repintura") {
      if (acabamentoMadeira === "verniz")
        materiais = ["Lixas para madeira", "Verniz Brilhante ou Stain Acetinado"];
      else if (acabamentoMadeira == "tinta esmalte sintético")
        materiais = ["Lixas para madeira", "Esmalte Sintético Base Solvente ou Base D’água"]
      }
  }

  if (material === "alvenaria") {
    if (tipoAlvenaria === "nova") {
      if (localAlvenaria === "interna") {
        materiais = [
          "Fundo Preparador (em caso de reboco fraco)",
          "Selador Acrílico",
          "Massa Corrida",
          "Tinta Acrílica (Fosca, Acetinada ou Semibrilho)"
        ];
      } else if (localAlvenaria === "externa") {
        materiais = [
          "Fundo Preparador (em caso de reboco fraco)",
          "Selador Acrílico",
          "Massa Acrílica",
          "Fundo Emborachado",
          "Tinta Acrlílica Emborrachada",
          "Caso o cliente queira, pode ser utilizado tinta Acrilica comum (Fosca ou Semibrilho)"
        ];
      }
    } else if (tipoAlvenaria === "repintura") {
      if (acabamentoAlvenaria === "fosco" || acabamentoAlvenaria === "acetinado") {
        materiais = [
          "Massa Acrílica e lixa para correções",
          "Tinta Acrílica (Fosca, Acetinada ou Semibrilho)"
        ];
      } else if (acabamentoAlvenaria === "semibrilho") {
        materiais = [
          "Massa Acrílica e lixa para correções",
          "Tinta Acrílica Semibrilho",
          "Caso queira acabamento fosco ou acetinado, deve ser feito o lixamento da tinta antiga"
        ];
      } else if (acabamentoAlvenaria === "emborrachado") {
        materiais = [
          "Massa Acrílica e lixa para correções",
          "Tinta Emborrachada"
        ];
      }
    }
  }

  if (material === "metal") {
    if (tipoMetal === "nova") {
      materiais = ["Fundo para Metal", "Tinta Esmalte Sintético (Base Solvente ou Base D’água)"];
    } else if (tipoMetal === "repintura") {
      materiais = ["Convertedor de Ferrugem", "Lixas", "Tinta Esmalte Sintético"];
    }
  }
  
  return (
    <div style={styles.container}>
      <h2>Materiais Recomendados</h2>
      <ul>
        {materiais.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p style={styles.observacao}>
        <strong>Observação:</strong> Deve-se oferecer também os agregados:
        kit de pintura (bandeja, pincel, rolo), fita crepe para isolamento, lona plástica, lixas, espátula, aguarrás (para tintas esmalte à base solvente). Se houver dois tipos de tintas (base d'água e solvente), recomenda-se dois rolos.
      </p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  observacao: { marginTop: "20px", fontSize: "14px", color: "red" }
};

export default Resultado;
