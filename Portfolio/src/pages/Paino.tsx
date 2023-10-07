import React from 'react';
import { notes } from '../components/Helpers';
import Octave from '../components/Octave';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return <Octave notes={notes} clickHandler={handleClick} />;
}

export default App;