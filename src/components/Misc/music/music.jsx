import React, { useState, useRef, useEffect } from 'react';
import './music.scss';
import music1 from  '../../../assets/music/m1.mp3';
import music2 from  '../../../assets/music/m2.mp3';
import music3 from  '../../../assets/music/m3.mp3';
import music4 from  '../../../assets/music/m4.mp3';



const Music = () => {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);

    const playlist = [
        { title: 'Dooron Dooron', artist: 'Paresh Pahuja', duration: '4:00', src: music1 },
        { title: 'Die With a Smile', artist: 'Lady Gaga Bruno Mars', duration: '4:09', src: music2 },
        { title: 'Gone Gone Gone', artist: 'Phillip Phillips', duration: '3:42', src: music3 },
        { title: 'Tu meri', artist: 'Vishal Dalani', duration: '4:30', src: music4 },
    ];

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        if (!audioRef.current) return;
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setProgress(0);
    };

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        const current = audioRef.current.currentTime;
        const dur = audioRef.current.duration;
        setCurrentTime(current);
        setDuration(dur);
        setProgress((current / dur) * 100 || 0);
    };

    const handleSeek = (e) => {
        if (!audioRef.current) return;
        const dur = audioRef.current.duration;
        audioRef.current.currentTime = (e.target.value / 100) * dur;
    };

    const handleVolumeChange = (e) => {
        const vol = e.target.value;
        setVolume(vol);
        if (audioRef.current) {
            audioRef.current.volume = vol / 100;
        }
    };

    const handlePrevious = () => {
        setCurrentTrack((prev) => (prev > 0 ? prev - 1 : playlist.length - 1));
        setIsPlaying(false);
    };

    const handleNext = () => {
        setCurrentTrack((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
        setIsPlaying(false);
    };

    // Handle track changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            setProgress(0);
            setCurrentTime(0);
        }
    }, [currentTrack]);

    // Auto-play when switching tracks if already playing
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(err => console.log('Playback prevented:', err));
        }
    }, [currentTrack]);

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="wmp-container">
            <div className="wmp-header">
                <div className="wmp-menu">
                    <span>File</span>
                    <span>View</span>
                    <span>Play</span>
                    <span>Tools</span>
                    <span>Help</span>
                </div>
            </div>

            <div className="wmp-content">
                <div className="wmp-visualizer">
                    <div className="wmp-now-playing">
                        <div className="track-info">
                            <div className="track-title">{playlist[currentTrack].title}</div>
                            <div className="track-artist">{playlist[currentTrack].artist}</div>
                        </div>
                        <div className="visualizer-bars">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bar"
                                    style={{
                                        height: isPlaying
                                            ? `${Math.random() * 60 + 20}%`
                                            : '10%',
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="wmp-playlist">
                    <div className="playlist-header">Library</div>
                    <div className="playlist-items">
                        {playlist.map((track, index) => (
                            <div
                                key={index}
                                className={`playlist-item ${
                                    index === currentTrack ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setCurrentTrack(index);
                                    setIsPlaying(true);
                                }}
                            >
                                <span className="track-number">{index + 1}</span>
                                <div className="track-details">
                                    <div className="track-name">{track.title}</div>
                                    <div className="track-meta">{track.artist}</div>
                                </div>
                                <span className="track-duration">{track.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="wmp-controls-section">
                <div className="wmp-progress-area">
                    <span className="time-display">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="wmp-progress"
                    />
                    <span className="time-display">{formatTime(duration)}</span>
                </div>

                <div className="wmp-controls">
                    <button onClick={handlePrevious} className="control-btn" title="Previous">
                        ⏮
                    </button>
                    <button onClick={handleStop} className="control-btn" title="Stop">
                        ⏹
                    </button>
                    <button onClick={togglePlay} className="control-btn play-btn" title={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <button onClick={handleNext} className="control-btn" title="Next">
                        ⏭
                    </button>

                    <div className="volume-control">
                        <span className="volume-icon">🔊</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="volume-slider"
                        />
                    </div>
                </div>
            </div>

            <audio 
                ref={audioRef} 
                src={playlist[currentTrack].src} 
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleNext}
            />
        </div>
    );
};

export default Music;