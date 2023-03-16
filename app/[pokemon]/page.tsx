import React from 'react';
import Link from "next/link";

const Pokemon = async ({
                     params, searchParams,
                 }: {
    params: { pokemon: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
    const data = await res.json();
    const numberId = Number(params.pokemon);
    const type = data.types[0].type.name
    const styleBG = {
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
            <p className='text-slate-500'>{numberId < 10 ? `#00${numberId}` : numberId< 100 ? `#0${numberId}` : `#${numberId}`}</p>
            <img className='h-[350px] p-3 mt-10 rounded-3xl' style={styleBG} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(params.pokemon)}.png`} alt='pokemon'/>
        </div>
    );
};

export default Pokemon;
