import { useState } from 'react';
import Menu from './components/Menu';
import Themes from './components/buttons/Themes';
import imgMateiCananau from './img/MateiCananau.jpg';

function App() {
  const [theme, setTheme] = useState(
    'bg-zinc-100 transition ease-in-out duration-500'
  );
  const [primaryColor, setPrimaryColor] = useState(
    'bg-white transition ease-in-out duration-500 rounded shadow-md'
  );
  const [fontColor, setFontColor] = useState('bg-black');

  return (
    <div className={`transition ease-in-out duration-500 ${theme}`}>
      <Themes
        changeTheme={(theme) => setTheme(theme)}
        changePrimary={(primaryColor) => setPrimaryColor(primaryColor)}
      />
      <img src={imgMateiCananau} />
      <p className='text-black font-bold text-5xl'>HELLO SIIR</p>
      <Menu changePrimary={primaryColor}></Menu>
    </div>
  );
}

export default App;
