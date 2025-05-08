import { useState } from 'react';
import './AddCategory.css';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form className="search-form" onSubmit={ onSubmit }>
        <div className="input-container">
            <input 
                type="text"
                className="search-input"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button type="submit" className="search-button">🔍</button>
        </div>
    </form>
    )
}
