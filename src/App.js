import { useState } from 'react';
import Menu from './components/Menu';
import Themes from './components/buttons/Themes';

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
      <Menu changePrimary={primaryColor}></Menu>
    </div>
  );
}

export default App;
