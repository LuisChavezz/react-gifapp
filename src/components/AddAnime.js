import PropTypes from 'prop-types';
import { useState } from 'react';
import { TextField } from '@material-ui/core';

export const AddAnime = ( {setAnime} ) => { //Recibe como prop, la función del useState del componente padre

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => { //recibe el evento
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => { //recibe el evento
        e.preventDefault(); //evita el comportamiento molesto de un form

        if ( inputValue.trim().length > 2 ) {
            setAnime( animes => [ inputValue, ...animes ] ) // asigna un valor al state de anime
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            
            <TextField 
                onChange={ handleInputChange }
                id="outlined-basic" 
                label="Texto" 
                variant="outlined"
                value={ inputValue }
                autoComplete='off'
            />
        </form>
    );

}


AddAnime.propTypes = {
    setAnime: PropTypes.func.isRequired
}