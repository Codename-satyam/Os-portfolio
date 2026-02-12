import { motion } from 'framer-motion';
import Icon from "../Icon/Icon.jsx";
import { getWindowContent } from "../Window/WindowContents";
import "./Desktop.scss";
import xp from "../../assets/required/back.jpg";
import computer from "../..//assets/icons/computer.png";
import folder from "../../assets/icons/folder.png";
import resume from "../../assets/icons/resume.png";
import mail from "../../assets/icons/mail.png";
import explorer from "../../assets/icons/explorer.png";
import music from "../../assets/icons/music.png";
import pictures from "../../assets/icons/pic.png";
import documents from "../../assets/icons/folder.png";

function Desktop({ openWindow }) {

    return (
        <motion.div 
            className="desktop" 
            style={{ backgroundImage: `url(${xp})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Icon 
                icon={computer} 
                label="My Computer" 
                onClick={() => openWindow('myComputer', 'My Computer', computer, getWindowContent('myComputer'))}
            />
            <Icon 
                icon={folder} 
                label="Projects" 
                onClick={() => openWindow('projects', 'Projects', folder, getWindowContent('projects'))}
            />
            <Icon 
                icon={resume} 
                label="Resume.txt" 
                onClick={() => openWindow('resume', 'Resume.txt', resume, getWindowContent('resume'))}
            />
            <Icon 
                icon={mail} 
                label="Contact" 
                onClick={() => openWindow('contact', 'Contact', mail, getWindowContent('contact'))}
            />
            <Icon 
                icon={explorer} 
                label="Explorer"
                onClick={() => openWindow('explorer', 'Windows Explorer', explorer, getWindowContent('explorer'))}
            />
            <Icon 
                icon={music} 
                label="Music Player"
                onClick={() => openWindow('music', 'Windows Media Player', music, getWindowContent('music'))}
            />
            <Icon 
                icon={pictures} 
                label="My Pictures"
                onClick={() => openWindow('pictures', 'Windows Picture Viewer', pictures, getWindowContent('pictures'))}
            />
            <Icon 
                icon={documents} 
                label="My Documents"
                onClick={() => openWindow('documents', 'My Documents', documents, getWindowContent('documents'))}
            />
        </motion.div>
    );
}

export default Desktop;
