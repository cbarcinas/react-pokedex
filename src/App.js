import React, { useState } from "react";
import axios from "axios";
import Pokedex from "./components/Pokedex";

const App = (props) => {
  const [data, setData] = useState({});
  const [pokeName, setPokeName] = useState("");

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setData({
          img: res.data.sprites.front_default,
          name: res.data.species.name,
          exp: res.data.base_experience,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Pokedex searchPokemon={searchPokemon} setPokeName={setPokeName} />
      </div>
    </>
  );
};

export default App;
