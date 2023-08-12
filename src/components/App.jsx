import { useState } from 'react';
import { SearchBar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './App.module.css';

export const App = () => {
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);

    const handleFormSubmit = input => {
        setInput(input);
        setPage(1);
    };

    const handleLearnMorePage = event => {
        event.preventDefault();
        setPage(prevPage => prevPage + 1);
    };

    const handleTotalPages = totalPages => {
        page >= totalPages ? setLoadMore(false) : setLoadMore(true);
    };

    return (
        <div className={style.App}>
            <SearchBar onSubmit={handleFormSubmit} />
            <ImageGallery name={input} page={page} total={handleTotalPages} />
            {loadMore && (
                <Button
                    curPage={page}
                    learnMorePage={handleLearnMorePage}
                    isFalse={loadMore}
                />
            )}
            <ToastContainer autoClose={3000} />
        </div>
    );
};