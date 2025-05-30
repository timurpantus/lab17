import React, { useState, useEffect } from 'react';
import fetchPhotos from '../api/photosApi';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            const data = await fetchPhotos(page, 4);
            setPhotos(data);
            setLoading(false);
        };

        loadPhotos();
    }, [page]);

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="gallery">
                {photos.map(photo => (
                    <div key={photo.id}>
                        <img src={photo.download_url} alt={photo.author} />
                        <p>{photo.author}</p>
                    </div>
                ))}
            </div>
            <button onClick={handlePrevious} disabled={page === 1}>
                Попередні
            </button>
            <button onClick={handleNext}>
                Наступні
            </button>
        </div>
    );
};

export default Gallery;