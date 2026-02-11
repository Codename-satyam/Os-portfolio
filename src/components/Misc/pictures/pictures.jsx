import React, { useState } from 'react';
import './pictures.scss';
import img1 from '../../../assets/Images/1.jpeg';
import img2 from '../../../assets/Images/2.jpeg';
import img3 from '../../../assets/Images/3.jpeg';
import img4 from '../../../assets/Images/4.jpeg';
import img5 from '../../../assets/Images/5.jpeg';

const Pictures = () => {
    const images = [
        { src: img1, name: 'Image 1' },
        { src: img2, name: 'Image 2' },
        { src: img3, name: 'Image 3' },
        { src: img4, name: 'Image 4' },
        { src: img5, name: 'Image 5' },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [zoom, setZoom] = useState(100);

    const handlePrevious = () => {
        setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setZoom(100);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setZoom(100);
    };

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 25, 200));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 25, 50));
    };

    const handleActualSize = () => {
        setZoom(100);
    };

    return (
        <div className="picture-viewer">
            <div className="viewer-header">
                <div className="viewer-menu">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Tools</span>
                    <span>Help</span>
                </div>
            </div>

            <div className="viewer-toolbar">
                <button onClick={handlePrevious} className="toolbar-btn" title="Previous">
                    ◀ Previous
                </button>
                <button onClick={handleNext} className="toolbar-btn" title="Next">
                    Next ▶
                </button>
                <div className="toolbar-separator"></div>
                <button onClick={handleZoomOut} className="toolbar-btn" title="Zoom Out">
                    🔍-
                </button>
                <button onClick={handleActualSize} className="toolbar-btn" title="Actual Size">
                    {zoom}%
                </button>
                <button onClick={handleZoomIn} className="toolbar-btn" title="Zoom In">
                    🔍+
                </button>
                <div className="image-counter">
                    {currentImage + 1} of {images.length}
                </div>
            </div>

            <div className="viewer-content">
                <div className="main-image-container">
                    <img
                        src={images[currentImage].src}
                        alt={images[currentImage].name}
                        className="main-image"
                        style={{ transform: `scale(${zoom / 100})` }}
                    />
                </div>
            </div>

            <div className="thumbnail-strip">
                <div className="thumbnails">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentImage(index);
                                setZoom(100);
                            }}
                        >
                            <img src={image.src} alt={image.name} />
                            <span className="thumbnail-label">{image.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="viewer-footer">
                <span className="image-name">{images[currentImage].name}</span>
            </div>
        </div>
    );
};

export default Pictures;