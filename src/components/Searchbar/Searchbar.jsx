import { useState } from 'react';
import style from './Searchbar.module.css';
import { toast } from 'react-toastify';

export const SearchBar = data => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        const inValue = event.currentTarget.value.toLowerCase();
        setInputValue(inValue);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            toast('Please, enter something');
            return;
        }
        data.onSubmit(inputValue);
    };

    return (
        <header className={style.Searchbar}>
            <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchForm_button}>
                    <span className={style.SearchForm_button_label}>
                        Search
                    </span>
                </button>

                <input
                    className={style.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInputChange}
                />
            </form>
        </header>
    );
};