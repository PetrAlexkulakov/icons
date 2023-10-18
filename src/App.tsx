import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './App.css';

function App() {
  const [randomIcon, setRandomIcon] = useState<IconDefinition | null>(null);

  const icons = [...Object.values(fab), ...Object.values(fas), ...Object.values(far)];

  const handleClick = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * icons.length);
      setRandomIcon(icons[randomIndex]);
    }, 3000);
  };

  return (
    <>
      {randomIcon && <FontAwesomeIcon className='icon' icon={randomIcon} />}
      <button onClick={handleClick}>Show Random Icon</button>
    </>
  );
}

export default App;
