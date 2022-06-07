import { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Themes from './components/buttons/Themes';

function App() {
  // const [theme, setTheme] = useState(
  //   'bg-zinc-100 transition ease-in-out duration-500'
  // );
  // const [primaryColor, setPrimaryColor] = useState(
  //   'bg-white transition ease-in-out duration-500 rounded shadow-md'
  // );
  // const [fontColor, setFontColor] = useState('bg-black');

  const lightTheme = 'bg-zinc-100'
  const darkTheme = 'bg-zinc-800'

  const lightColor = 'bg-white transition ease-in-out duration-500 rounded shadow-md'
  const darkColor = 'bg-black transition ease-in-out duration-500 rounded shadow-md'

  const [enabled, setEnabled] = useState(false);

  return (
    <div className={`transition ease-in-out duration-500 ${enabled ? darkTheme : lightTheme}`}>
      {/* <Themes
        changeTheme={(theme) => setTheme(theme)}
        changePrimary={(primaryColor) => setPrimaryColor(primaryColor)}
      /> */}

      <Themes enabled={enabled} setEnabled={setEnabled} onClick={() => setEnabled(!enabled)} />
      <Page1 changePrimary={enabled ? darkColor : lightColor} />
      {/* <Menu changePrimary={primaryColor}></Menu> */}
      <Page2 />
      <Page1 />
    </div>
  );
}

export default App;
