
import { useState } from 'react';
import { useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( {anime} ) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( anime ).then( imgs => setImages( imgs ) );
    }, [ anime ]) // si 'anime' cambia, vuelve a ejecutar el efecto (para eso son los corchetes)


    return (
        <div>
            <h3>{ anime }</h3>
            <div className='card-grid'>
                {
                    images.map( gif => (
                        <GifGridItem 
                            key={ gif.id }
                            img={ gif } 
                        />
                    ))
                }
            </div>
        </div>
    );
}
