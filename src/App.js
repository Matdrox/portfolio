import { useState, useRef } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Switch from './components/buttons/Switch';
import LangButton from './components/buttons/LangButton';

function App() {
  const lightTheme = 'bg-zinc-100';
  const darkTheme = 'bg-zinc-800';

  const lightFont = 'text-zinc-800';
  const darkFont = 'text-zinc-200';

  const [enabled, setEnabled] = useState(false);
  const [lang, setLang] = useState('english');
  const fontColor = enabled ? darkFont : lightFont;

  return (
    <div
      className={`transition ease-in-out duration-500 ${
        enabled ? darkTheme : lightTheme
      }`}
    >
      <Switch
        enabled={enabled}
        setEnabled={setEnabled}
        onClick={() => setEnabled(!enabled)}
      />
      <LangButton
        text={lang ? 'EN' : 'IA'}
        onClick={() => setLang(!lang)}
      />
      <Page1 fontColor={fontColor} />
      <Page2 fontColor={fontColor} />
      <Page3 fontColor={fontColor} />
    </div>
  );
}

export default App;
