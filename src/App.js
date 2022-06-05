import { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
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
      <Page1 changePrimary={primaryColor}/>
      {/* <Menu changePrimary={primaryColor}></Menu> */}
      <Page2/>
    </div>
  );
}

export default App;
