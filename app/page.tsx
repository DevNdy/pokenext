import {BeakerIcon} from '@heroicons/react/24/solid'
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
    return (
        <main className='flex flex-col m-3'>
            <h1 className='text-3xl text-slate-800 font-bold mt-12 m-3'>Pokédex</h1>
            <p className='mt-3 m-3 text-slate-500'>Rechercher un pokémon avec le nom ou utiliser son Numéro National Pokédex
            </p>
            <SearchBar/>
        </main>
    )
}
