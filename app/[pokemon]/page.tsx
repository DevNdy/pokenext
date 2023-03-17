import React from 'react';
import Link from "next/link";
import StatsPokemon from "@/app/components/pokemons/StatsPokemon";
import bouclierImg from '../../public/bouclier.png'
import coeurImg from '../../public/coeur.png'
import combatImg from '../../public/combat.png'
import eclatImg from '../../public/eclat.png'
import epeeDoubleImg from '../../public/epeeDouble.png'
import epee from '../../public/epee.png'

const Pokemon = async ({
                     params, searchParams
                 }: {
    params: { pokemon: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
    const data = await res.json();
    const numberId = data.id;
    const type = data.types[0].type.name;
    const styleBG =  {
        backgroundColor: type === "grass" ? "#CEE8D5" : type === "bug" ? "#CEE8D5" : type === 'fire' ? '#EBBCB4' : type === 'water' ? '#B3E2E8' : type === 'normal' ? '#FAF9F5' : type === 'poison' ? '#DAD0F8' : type === 'electric' ? '#F8F7C5' : type === 'ground' ? '#D7B692' : type === 'fairy' ? '#F8DAD0' : type === 'fighting' ? '#D7B692' : type === 'rock' ? '#D7B692' : type === 'psychic' ? '#CB9DD6' : type === 'ghost' ? '#CB9DD6' : type === 'dragon' ? '#FACC3E' :  "#DCF2EE"
    }
    return (
        <div className='flex flex-col items-center p-3'>
            <div className='w-full flex flex-row items-center justify-between mt-10'>
                <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <h2 className='capitalize font-bold text-2xl text-slate-800'>{data.forms[0].name}</h2>
                <span></span>
            </div>
            <p className='text-slate-500 ml-5'>{numberId < 10 ? `#00${numberId}` : numberId< 100 ? `#0${numberId}` : `#${numberId}`}</p>
            <img className='h-[350px] min-w-[340px] p-3 mt-10 rounded-3xl' style={styleBG} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numberId}.png`} alt='pokemon'/>
            <div className='grid grid-cols-2 gap-3 w-[340px] mt-10'>
                {
                    data.stats.map((pokemon: any, index: number) => (
                    <StatsPokemon key={index} stat={pokemon.base_stat} name={pokemon.stat.name} img={pokemon.stat.name === "attack" ? epee : pokemon.stat.name === "hp" ? coeurImg : pokemon.stat.name === "defense" ? bouclierImg : pokemon.stat.name === "special-attack" ? epeeDoubleImg : pokemon.stat.name === "special-defense" ? combatImg : eclatImg} />
                ))}
            </div>
            <div className='mt-3 flex flex-row justify-center items-center w-[330px]'>
                <h4 className='mt-1 text-sm font-bold text-slate-800 '>Height: <span className='font-light text-slate-500'>{data.height * 10} cm</span></h4>
                <h4 className='mt-1 font-bold text-sm text-slate-800 ml-[80px]'>Weight: <span className='font-light text-slate-500'>{data.weight} kg</span></h4>
            </div>
        </div>
    );
};

export default Pokemon;
