import React from 'react';
import forceImg from '../../../public/force.png'
import Image from "next/image";

type Props = {
    name: string,
    stat: number;
    img: any;
}
const StatsPokemon = ({name, stat, img}: Props) => {
    return (
        <div className='flex items-end'>
            <Image src={img} alt='force' width={17} height={17} />
            <h4 className='capitalize ml-1 text-[13px] ' >{name} :</h4>
            <p className='ml-2 text-slate-500 font-light text-[12px]'>{stat}</p>
        </div>
    );
};

export default StatsPokemon;
