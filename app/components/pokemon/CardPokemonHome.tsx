import React from 'react';

type Props = {
    pokemon: string;
    index: number;
}
const CardPokemonHome = async ({pokemon, index}: Props) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
    const data = await res.json();
    const type = data.types[0].type.name
    const styleBG = {
        backgroundColor: type === "grass" ? "#CEE8D5" : type === "bug" ? "#CEE8D5" : type === 'fire' ? '#EBBCB4' : type === 'water' ? '#B3E2E8' : type === 'normal' ? '#FAF9F5' : type === 'poison' ? '#DAD0F8' : type === 'electric' ? '#F8F7C5' : type === 'ground' ? '#D7B692' : type === 'fairy' ? '#F8DAD0' : type === 'fighting' ? '#D7B692' : type === 'rock' ? '#D7B692' : type === 'psychic' ? '#CB9DD6' : type === 'ghost' ? '#CB9DD6' : type === 'dragon' ? '#FACC3E' :  "#DCF2EE"
    }
    return (
            <div className='card-body flex flex-col items-center rounded-lg' style={styleBG}>
                <img className='h-[120px]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt='pokemon'  />
                <h5 className='card-title'>{pokemon}</h5>
                <p>{index + 1 < 10 ? `#00${index + 1}` : index + 1 < 100 ? `#0${index + 1}` : `#${index + 1}` }
                </p>
                <p>{data.types[0].type.name}</p>
            </div>

    );
};

export default CardPokemonHome;
