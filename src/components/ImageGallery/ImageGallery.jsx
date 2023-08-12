import { useEffect, useRef, useState } from 'react';
import { Api } from '../api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import style from './ImageGallery.module.css';

export const ImageGallery = ({ name, page, total }) => {
    const [pictures, setPictures] = useState([]);
    const [modalPicture, setModalPicture] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    let hits = useRef(12);

    useEffect(() => {
        if (name === '') {
            return;
        }
        setLoading(true);
        Api(name, page)
            .then(data => {
                if (name !== '' && page === 1) {
                    setPictures(data.hits);
                    console.log(data.totalHits);
                    hits.current = 12;
                } else {
                    hits.current += data.hits.length;
                    if (hits.current > data.totalHits) {
                        return;
                    }
                    setPictures(prevState => [...prevState, ...data.hits]);
                }
                if (data.totalHits === 0) {
                    toast("We don't find any photo");
                }
                total(data.totalHits / 12);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(setLoading(false));
    }, [name, page, total]);

    const toggleModal = image => {
        setModalPicture(image);
        setShowModal(!showModal);
    };

    return (
        <section className="section_gallery">
            <ul className={style.ImageGallery}>
                <ImageGalleryItem pictures={pictures} onClose={toggleModal} />
            </ul>
            {showModal && (
                <Modal onClose={toggleModal}>
                    <img src={modalPicture} alt="" />
                </Modal>
            )}
            {loading && <Loader />}
        </section>
    );
};