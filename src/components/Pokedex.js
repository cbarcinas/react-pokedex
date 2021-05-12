import React from "react";


const Pokedex = (props) => {
  const { searchPokemon, setPokeName } = props;

  const handleChanges = (e) => {
    setPokeName(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <h3>name : </h3>
        </div>
        <div>
          <input type="text" onChange={handleChanges} />
          <button onClick={searchPokemon}>Search</button>
        </div>
      </div>
    </>
  );
};

export default Pokedex;
