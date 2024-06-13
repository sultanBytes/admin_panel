import React, { useState, useRef } from 'react';

const LogoUploader = ({ initialSrc, altText }) => {
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
                onChange={handleFileChange}
            />
            <img
                src={imageSrc}
                width={50}
                height={50}
                className='logo-image'
                onClick={handleImageClick}
                alt={altText}
            />
            {showToast && <div id='toast' className='show'>Image Updated</div>}
        </div>
    );
};

export default LogoUploader;
