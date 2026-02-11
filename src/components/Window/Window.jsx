import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Window.scss';

function Window({ 
    id, 
    title, 
    icon, 
    content, 
    isMinimized, 
    isMaximized, 
    zIndex, 
    position, 
    size,
    onClose, 
    onMinimize, 
    onMaximize, 
    onFocus,
    onDragEnd 
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [currentPosition, setCurrentPosition] = useState(position);
    const windowRef = useRef(null);

    useEffect(() => {
        setCurrentPosition(position);
    }, [position]);

    const handleMouseDown = (e) => {
        if (e.target.closest('.window-controls')) return;
        if (isMaximized) return;
        
        onFocus(id);
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - currentPosition.x,
            y: e.clientY - currentPosition.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        const newX = e.clientX - dragOffset.x;
        const newY = Math.max(0, e.clientY - dragOffset.y);
        
        setCurrentPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            onDragEnd(id, currentPosition);
        }
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragOffset, currentPosition]);

    if (isMinimized) return null;

    const windowStyle = isMaximized 
        ? { 
            position: 'fixed',
            left: '0px', 
            top: '0px', 
            width: '100vw', 
            height: 'calc(100vh - 45px)',
            zIndex: zIndex
          }
        : { 
            position: 'absolute',
            left: `${currentPosition.x}px`, 
            top: `${currentPosition.y}px`, 
            width: size.width, 
            height: size.height,
            zIndex: zIndex
          };

    const windowVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.div 
            ref={windowRef}
            className={`window ${isDragging ? 'dragging' : ''} ${isMaximized ? 'maximized' : ''}`}
            style={{
                ...windowStyle,
                willChange: isDragging ? 'transform' : 'auto'
            }}
            onMouseDown={() => onFocus(id)}
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="window-titlebar" onMouseDown={handleMouseDown}>
                <div className="window-title">
                    {icon && <img src={icon} alt={title} className="window-icon" />}
                    <span>{title}</span>
                </div>
                <div className="window-controls">
                    <button className="minimize-btn" onClick={() => onMinimize(id)} title="Minimize">
                        _
                    </button>
                    <button className="maximize-btn" onClick={() => onMaximize(id)} title="Maximize">
                        {isMaximized ? '❐' : '□'}
                    </button>
                    <button className="close-btn" onClick={() => onClose(id)} title="Close">
                        ✕
                    </button>
                </div>
            </div>
            <div className="window-content">
                {content}
            </div>
        </motion.div>
    );
}

export default Window;