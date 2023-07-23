import './music_controller.css';

import { useRef, useEffect, useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import music from '/src/audio/ometepe.mp3';

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect( () => {
    audioRef.current.play();
    audioRef.current.volume = 0.2;
  }, []);
  
  
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className='music'
      onClick={toggleAudio}
    >
      <audio ref={audioRef} src={music} loop></audio>
      <div>
        {
          isPlaying
          ? <VolumeUpIcon/>
          : <VolumeOffIcon/>
        }
      </div>
    </div>
    
  )
}

export default Music;