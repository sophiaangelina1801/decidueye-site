import { useState } from "react";
import "./App.css";
import deci from "./assets/header deci.png";
import folha from "./assets/folha.png";
import asas from "./assets/asas.png";
import genero from "./assets/genero.png";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header>
        <img className="deci" src={deci} alt="" />
        <h1> Decidueye </h1>
        <h2>N°0724</h2>
      </header>
      <button className="botao">
        <img className="folha" src={folha} alt="" />
        <h7>Grama</h7>
      </button>
      <button className="voador">
        <img className="asas" src={asas} alt="" />
        <h8>Voador</h8>
        </button>
      <h3>
        Decidueye consegue se mover enquanto oculta completamente sua presença
        dos outros. Com a distração de um oponente, Decidueye aproveita a
        oportunidade para atacá-lo de surpresa.
      </h3>
      <h4>______________________________________________</h4>
      <h5> ⚖︎ PESO</h5> 
      <h9>⇡ ALTURA</h9>
      <h10>36.6kg</h10>
      <h11>1,6 m</h11>
      <h12>☰ CATEGORIA</h12>
      <h13>◓⃙ HABILIDADE</h13>
      <h14>Arrow</h14>
      <h15>Overgrow</h15>
      <h16>GÊNERO</h16>
      <img className="genero" src={genero} alt="" />
      <h17> ♂ 87,5%</h17>
      <h18>♀ 12,5%</h18>
    </main>
  );
}
