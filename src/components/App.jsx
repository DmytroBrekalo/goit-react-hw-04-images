import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './App.module.css';

export class App extends Component {
    state = {
        input: '',
        page: 1,
        loadMore: false,
    };

    handleFormSubmit = input => {
        this.setState({
            input,
            page: 1,
        });
    };
    handleLearnMorePage = event => {
        event.preventDefault();
        this.setState(() => ({
            page: this.state.page + 1,
        }));
    };

    handleTotalPages = totalPages => {
        this.state.page >= totalPages
            ? this.setState({ loadMore: false })
            : this.setState({ loadMore: true });
    };
    render() {
        return (
            <div className={style.App}>
                <SearchBar onSubmit={this.handleFormSubmit} />
                <ImageGallery
                    name={this.state.input}
                    page={this.state.page}
                    total={this.handleTotalPages}
                />
                {this.state.loadMore && (
                    <Button
                        curPage={this.state.page}
                        learnMorePage={this.handleLearnMorePage}
                        isFalse={this.state.loadMore}
                    />
            )}
            <ToastContainer autoClose={3000} />
            </div>
        );
    }
}