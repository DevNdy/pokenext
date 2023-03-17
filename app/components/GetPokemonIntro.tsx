import React from 'react';
import CardPokemonHome from "@/app/components/pokemons/CardPokemonHome";
import {NextPage} from "next";

const GetPokemonIntro: any = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
    const res = await fetch(url);
    const data = await res.json();

    const pokemon = data.results.map((pokemon: any) => pokemon.url)
    return (
        <section className='m-3 grid gap-2 grid-cols-fluid'>
            {
                data.results.map((pokemon: any, index: number) => {
                    return (
                        <CardPokemonHome pokemon={pokemon.name} index={index} />
                    )
                })
            }
        </section>
    );
};

export default GetPokemonIntro;
