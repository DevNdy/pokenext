'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";

const SearchBar = () => {
    const [search, setSearch] = useState<string>("");
    const [dataApi, setDataApi] = useState([]);
    const [errorSearch, setErrorSearch] = useState<boolean>(false);
    const router = useRouter();

    async function fetchDataApi() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        const data = await res.json();
        const arrayName = data.results.map((item: any) => item.name);
        setDataApi(arrayName);
        console.log(dataApi)
    }

    useEffect(() => {
        fetchDataApi()
    }, []);


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        if (dataApi.includes(search) || Number(search) > 0) {
            router.push(`/${search}`);
            setErrorSearch(false)
        } else {
            setErrorSearch(true);
        }
    }

    return (
        <form className='flex flex-col m-3' onSubmit={handleSearch}>
            <div className="flex items-center">
                <div className='flex flex-row items-center bg-slate-100 p-2 rounded-lg w-[280px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                    <input type="text"
                           className="w-full bg-slate-100 h-[35px] ml-2 pl-2 focus:outline-slate-200"
                           value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <button className='bg-slate-700 text-white p-2 h-[50px] ml-2 rounded-lg'>GO</button>
            </div>
            {
                errorSearch ?
                    <p className='flex items-center justify-start mt-2 text-red-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                        </svg>
                        Nom/Numéro du Pokémon invalide
                    </p> : <></>
            }
        </form>
    );
};

export default SearchBar;
