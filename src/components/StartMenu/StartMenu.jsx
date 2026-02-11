import { motion, AnimatePresence } from 'framer-motion';
import './StartMenu.scss';
import { getWindowContent } from '../Window/WindowContents';
import computer from '../../assets/icons/computer.png';
import folder from '../../assets/icons/folder.png';
import resume from '../../assets/icons/resume.png';
import mail from '../../assets/icons/mail.png';
import explorer from '../../assets/icons/explorer.png';


function StartMenu({ isOpen, onClose, openWindow }) {
    const handleShutdown = () => {
        if (window.confirm('Are you sure you want to shut down?')) {
            // Create a shutdown effect
            document.body.style.transition = 'opacity 1s';
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.innerHTML = '<div style="background: #000; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; color: #fff; font-family: Tahoma;">System has been shut down.</div>';
            }, 1000);
        }
    };
    const handleItemClick = (appId, title, icon) => {
        const content = getWindowContent(appId);
        openWindow(appId, title, icon, content);
        onClose();
    };

    const menuVariants = {
        hidden: {
            y: 20,
            opacity: 0,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                staggerChildren: 0.03,
                delayChildren: 0.1
            }
        },
        exit: {
            y: 20,
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        className="start-menu-overlay" 
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div 
                        className="start-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                <div className="start-menu-header">
                    <div className="user-info">
                        <div className="user-icon">👤</div>
                        <div className="user-name">Satyam Anand</div>
                    </div>
                </div>

                <div className="start-menu-body">
                    <div className="start-menu-left">
                        <div className="pinned-items">
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('myComputer', 'My Computer', computer)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={computer} alt="My Computer" className="item-icon" />
                                <span>My Computer</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('projects', 'Projects', folder)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={folder} alt="Projects" className="item-icon" />
                                <span>Projects</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('resume', 'Resume.txt', resume)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={resume} alt="Resume" className="item-icon" />
                                <span>Resume.txt</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('contact', 'Contact', mail)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={mail} alt="Contact" className="item-icon" />
                                <span>Contact</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('explorer', 'Windows Explorer', explorer)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={explorer} alt="Explorer" className="item-icon" />
                                <span>Windows Explorer</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('music', 'Windows Media Player', folder)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={folder} alt="Music Player" className="item-icon" />
                                <span>Windows Media Player</span>
                            </motion.div>
                            <motion.div 
                                className="start-menu-item" 
                                onClick={() => handleItemClick('pictures', 'Windows Picture Viewer', folder)}
                                variants={itemVariants}
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={folder} alt="Picture Viewer" className="item-icon" />
                                <span>Windows Picture Viewer</span>
                            </motion.div>
                        </div>

                        <div className="menu-separator"></div>

                        <div className="all-programs">
                            <motion.div 
                                className="start-menu-item"
                                whileHover={{ x: 5, backgroundColor: "rgba(51, 102, 204, 0.15)" }}
                            >
                                <span className="arrow">▶</span>
                                <span>All Programs</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="start-menu-right">
                        <div className="start-menu-item" onClick={onClose}>
                            <span>📁 My Documents</span>
                        </div>
                        <div className="start-menu-item" onClick={() => handleItemClick('pictures', 'Windows Picture Viewer', folder)}>
                            <span>🖼️ My Pictures</span>
                        </div>
                        <div className="start-menu-item" onClick={() => handleItemClick('music', 'Windows Media Player', folder)}>
                            <span>🎵 My Music</span>
                        </div>
                        <div className="start-menu-item" onClick={() => handleItemClick('myComputer', 'My Computer', computer)}>
                            <span>💻 My Computer</span>
                        </div>
                        
                        <div className="menu-separator"></div>
                        
                        <div className="start-menu-item" onClick={onClose}>
                            <span>⚙️ Control Panel</span>
                        </div>
                        <div className="start-menu-item" onClick={onClose}>
                            <span>🔧 Set Program Access</span>
                        </div>
                        
                        <div className="menu-separator"></div>
                        
                        <div className="start-menu-item" onClick={onClose}>
                            <span>🔍 Search</span>
                        </div>
                        <div className="start-menu-item" onClick={onClose}>
                            <span>❓ Help and Support</span>
                        </div>
                        <div className="start-menu-item" onClick={onClose}>
                            <span>🏃 Run...</span>
                        </div>
                    </div>
                </div>

                <div className="start-menu-footer">
                    <motion.div 
                        className="shutdown-button" 
                        onClick={handleShutdown}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(204, 68, 51, 0.2)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="shutdown-icon">⏻</span>
                        <span>Turn Off Computer</span>
                    </motion.div>
                </div>
            </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default StartMenu;