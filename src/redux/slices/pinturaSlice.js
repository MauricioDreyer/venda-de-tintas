import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  material: "",
  tipoMadeira: "",
  acabamentoMadeira: "",
  tipoAlvenaria: "", // "nova" ou "repintura"
  localAlvenaria: "", // "interna" ou "externa"
  acabamentoAlvenaria: "", // "fosco", "acetinado", "semibrilho" ou "emborrachado"
  tipoMetal: "",
};

const pinturaSlice = createSlice({
  name: "pintura",
  initialState,
  reducers: {
    setMaterial: (state, action) => { state.material = action.payload; },
    setTipoMadeira: (state, action) => { state.tipoMadeira = action.payload; },
    setAcabamentoMadeira: (state, action) => { state.acabamentoMadeira = action.payload; },
    setTipoAlvenaria: (state, action) => { state.tipoAlvenaria = action.payload; },
    setLocalAlvenaria: (state, action) => { state.localAlvenaria = action.payload; },
    setAcabamentoAlvenaria: (state, action) => { state.acabamentoAlvenaria = action.payload; },
    setTipoMetal: (state, action) => { state.tipoMetal = action.payload; },
  },
});

export const { 
  setMaterial, 
  setTipoMadeira,
  setAcabamentoMadeira,
  setTipoAlvenaria,
  setLocalAlvenaria,
  setAcabamentoAlvenaria,
  setTipoMetal,
} = pinturaSlice.actions;

export default pinturaSlice.reducer;
