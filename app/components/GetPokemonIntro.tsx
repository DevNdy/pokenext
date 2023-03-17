import React from 'react';
import CardPokemonHome from "@/app/components/pokemons/CardPokemonHome";
import {NextPage} from "next";

type Props = {
    name: string;
    url: string;
}

const GetPokemonIntro: any = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
    const res = await fetch(url);
    const data = await res.json();

    return (
        <section className='m-3 grid gap-2 grid-cols-fluid'>
            {
                data.results.map((pokemon: Props, index: number) => {
                    return (
                        <CardPokemonHome key={index} pokemon={pokemon.name} index={index} />
                    )
                })
            }
        </section>
    );
};

export default GetPokemonIntro;
