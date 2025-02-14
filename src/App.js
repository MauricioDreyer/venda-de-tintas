import React, { useState } from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import PerguntaMadeira from "./components/PerguntaMadeira";
import PerguntaMadeiraRepintura from "./components/PerguntaMadeiraRepintura";
import PerguntaMadeiraNova from "./components/PerguntaMadeiraNova";
import PerguntaAlvenaria from "./components/PerguntaAlvenaria";
import PerguntaAlvenariaNova from "./components/PerguntaAlvenariaNova";
import PerguntaAlvenariaRepintura from "./components/PerguntaAlvenariaRepintura";
import PerguntaMetal from "./components/PerguntaMetal";
import PerguntaMetalNova from "./components/PerguntaMetalNova";
import PerguntaMetalRepintura from "./components/PerguntaMetalRepintura";
import Resultado from "./components/Resultado";

function App() {
  const [step, setStep] = useState(1);
  const material = useSelector((state) => state.pintura.material);
  const tipoMadeira = useSelector((state) => state.pintura.tipoMadeira);
  const tipoAlvenaria = useSelector((state) => state.pintura.tipoAlvenaria);
  const tipoMetal = useSelector((state) => state.pintura.tipoMetal);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Home onNext={handleNext} />}

      {step === 2 && material === "madeira" && <PerguntaMadeira onNext={handleNext} />}
      {step === 3 && material === "madeira" && tipoMadeira === "repintura" && <PerguntaMadeiraRepintura onNext={handleNext} />}
      {step === 3 && material === "madeira" && tipoMadeira === "nova" && <PerguntaMadeiraNova onNext={handleNext} />}
      
      {step === 2 && material === "alvenaria" && <PerguntaAlvenaria onNext={handleNext} />}
      {step === 3 && material === "alvenaria" && tipoAlvenaria === "nova" && <PerguntaAlvenariaNova onNext={handleNext} />}
      {step === 3 && material === "alvenaria" && tipoAlvenaria === "repintura" && <PerguntaAlvenariaRepintura onNext={handleNext} />}
      
      {step === 2 && material === "metal" && <PerguntaMetal onNext={handleNext} />}
      {step === 3 && material === "metal" && tipoMetal === "nova" && <PerguntaMetalNova onNext={handleNext} />}
      {step === 3 && material === "metal" && tipoMetal === "repintura" && <PerguntaMetalRepintura onNext={handleNext} />}

      {step === 4 && <Resultado />}
    </div>
  );
}

export default App;
