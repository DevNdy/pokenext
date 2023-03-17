import {BeakerIcon} from '@heroicons/react/24/solid'
import SearchBar from "@/app/components/SearchBar";
import GetPokemonIntro from "@/app/components/GetPokemonIntro";

export default function Home() {
    return (
        <main className='flex flex-col m-3'>
            <h1 className='text-3xl text-slate-800 font-bold mt-8 m-3'>Pokédex</h1>
            <p className='mt-3 m-3 text-slate-500'>Rechercher un Pokémon avec le nom en Anglais ou utiliser son Numéro National Pokédex
            </p>
            <SearchBar/>
            <GetPokemonIntro/>
        </main>
    )
}
