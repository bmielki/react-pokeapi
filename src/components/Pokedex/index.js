import { Button } from "./styles";
import React, { useState, useEffect } from "react";
import pokeapi from "../../services/pokeapi";
import Pokecard from "../Pokecard";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPokemons() {
      await pokeapi.get(`pokemon?offset=0&limit=20`).then((response) => {
        console.log(response?.data);
        setPokemons(response?.data.results);
      });
    }
    loadPokemons();
  }, [pokemons, page, limit]);

  return (
    <div>
      {pokemons?.map((pokemon) => (
        <Pokecard name={pokemon.name} />
      ))}
      <Button> Page {page+1} > </Button>
    </div>
  );
}

export default Pokedex;
