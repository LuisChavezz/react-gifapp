import { useState } from "react";
import { AddAnime } from "./components/AddAnime";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [animes, setAnime] = useState( [] ); //valor inicial

    return (
        //Fragment html
        <>
            <h2>Gif Expert App</h2>
            <AddAnime setAnime={ setAnime } />
            <hr/>

            <ol>
                { //expresión js
                    animes.map( anime => ( // crea un nuevo arreglo en base a uno existente (lo recorre)
                        <GifGrid 
                            key={ anime }
                            anime={ anime }
                        />
                    ))
                }
            </ol>
        </>
    );

}


