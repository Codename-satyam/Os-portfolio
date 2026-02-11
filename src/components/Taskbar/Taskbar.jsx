import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Taskbar.scss';
import StartMenu from '../StartMenu/StartMenu';
import start from '../../assets/icons/start.png';

function Taskbar({ openWindow, windows, onWindowClick }) {
    const [now, setNow] = useState(new Date());

    useEffect(()=>{
        const timer=setInterval(()=>{
            setNow(new Date());
        },1000);
        return()=>clearInterval(timer);
    },[]);
    const time = now.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
    })
    const date = now.toLocaleDateString([],{
        year:'numeric',
        month:'short',
        day:'2-digit',
    });
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    const toggleStartMenu = () => {
        setIsStartMenuOpen(!isStartMenuOpen);
    };

    const closeStartMenu = () => {
        setIsStartMenuOpen(false);
    };

    return (
        <>
            <motion.div 
                className="taskbar"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.div 
                    className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
                    onClick={toggleStartMenu}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <img src={start} alt="Start" className='start-icon'/>
                    <span className="start-text">Start</span>
                </motion.div>
                
                <div className="taskbar-windows">
                    <AnimatePresence mode="popLayout">
                        {windows.map(window => (
                            <motion.div 
                                key={window.id}
                                className={`taskbar-window-button ${window.isMinimized ? '' : 'active'}`}
                                onClick={() => onWindowClick(window.id)}
                                title={window.title}
                                initial={{ scale: 0, opacity: 0, width: 0 }}
                                animate={{ 
                                    scale: 1, 
                                    opacity: 1, 
                                    width: 'auto',
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25
                                    }
                                }}
                                exit={{ 
                                    scale: 0, 
                                    opacity: 0, 
                                    width: 0,
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                layout
                            >
                                {window.icon && <img src={window.icon} alt={window.title} />}
                                <span>{window.title}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="taskbar-time-date">
                    <div className="time">{time}</div>
                    <div className="date">{date}</div>
                </div>
            </motion.div>
            <StartMenu 
                isOpen={isStartMenuOpen} 
                onClose={closeStartMenu}
                openWindow={openWindow}
            />
        </>
    );
}

export default Taskbar;