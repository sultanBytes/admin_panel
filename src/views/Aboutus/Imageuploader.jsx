import React, { useState, useRef } from 'react';

const ImageUploader = ({ initialSrc, altText }) => {
    const [imageSrc, setImageSrc] = useState(initialSrc);
    const [showToast, setShowToast] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setImageSrc(src);
            triggerToast();
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const triggerToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className='py-3'>
            <input
                type='file'
                ref={fileInputRef}
                style={{ display: 'none' }}
                name='profile-image'
                onChange={handleFileChange}
            />
            <img
                src={imageSrc}
                width={150}
                height={150}
                className='profile-image'
                onClick={handleImageClick}
                alt={altText}
            />
            {showToast && <div id='toast' className='show'>Image Updated</div>}
        </div>
    );
};

export default ImageUploader;