import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Homepage from './components/Desktop/Desktop.jsx';
import Taskbar from './components/Taskbar/Taskbar.jsx';
import Window from './components/Window/Window.jsx';
import StartUp from './components/StartUp/StartUp.jsx';
import { getWindowContent } from './components/Window/WindowContents.jsx';


function App() {
  const [windows, setWindows] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(100);
  const [showStartUp, setShowStartUp] = useState(true);

  const openWindow = (appId, title, icon, content) => {
    // Check if window is already open
    const existingWindow = windows.find(w => w.appId === appId);
    if (existingWindow) {
      // Focus existing window
      focusWindow(existingWindow.id);
      if (existingWindow.isMinimized) {
        toggleMinimize(existingWindow.id);
      }
      return;
    }

    const newWindow = {
      id: Date.now(),
      appId,
      title,
      icon,
      content,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex,
      position: { 
        x: 100 + (windows.length * 30), 
        y: 50 + (windows.length * 30) 
      },
      size: { width: '600px', height: '450px' }
    };

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const toggleMinimize = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  };

  const toggleMaximize = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  const focusWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  const handleDragEnd = (id, newPosition) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, position: newPosition } : w
    ));
  };

  return (
    <AnimatePresence mode="wait">
      {showStartUp ? (
        <StartUp key="startup" onFinish={() => setShowStartUp(false)} />
      ) : (
        <div key="desktop" className="App">
          <Homepage openWindow={openWindow} />
          <AnimatePresence mode="sync">
            {windows.map(window => (
              <Window
                key={window.id}
                {...window}
                onClose={closeWindow}
                onMinimize={toggleMinimize}
                onMaximize={toggleMaximize}
                onFocus={focusWindow}
                onDragEnd={handleDragEnd}
                onOpenWindow={(appId, title, icon) => openWindow(appId, title, icon, getWindowContent(appId))}
              />
            ))}
          </AnimatePresence>
          <Taskbar 
            openWindow={openWindow}
            windows={windows}
            onWindowClick={(id) => {
              focusWindow(id);
              toggleMinimize(id);
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
