import React from 'react';
import './MyComputer.scss';
import folder from '../../../assets/icons/folder.png';
import pic from '../../../assets/icons/pic.png';
import music from '../../../assets/icons/music.png';

const MyComputer = ({ onOpenWindow }) => {
    const handleFolderClick = (appId, title, icon) => {
        if (onOpenWindow) {
            onOpenWindow(appId, title, icon);
        }
    };

    return (
        <div className="mycomputer-container">
            <h2>My Computer</h2>
            <div className="folder-view">
                <div className="folder-item" onClick={() => handleFolderClick('documents', 'My Documents', folder)} title="Click to open My Documents">
                    <img src={folder} alt="Documents" />
                    <span>My Documents</span>
                </div>
                <div className="folder-item" onClick={() => handleFolderClick('pictures', 'Windows Picture Viewer', pic)} title="Click to open My Pictures">
                    <img src={pic} alt="Pictures" />
                    <span>My Pictures</span>
                </div>
                <div className="folder-item" onClick={() => handleFolderClick('music', 'Windows Media Player', music)} title="Click to open My Music">
                    <img src={music} alt="Music" />
                    <span>My Music</span>
                </div>
            </div>
            <h3>System Information</h3>
            <p><strong>OS:</strong> Windows XP Professional</p>
            <p><strong>Processor:</strong> Intel Core i7</p>
            <p><strong>RAM:</strong> 8.00 GB</p>
        </div>
    );
};

export default MyComputer;
