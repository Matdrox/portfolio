import { useState, useRef } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Switch from './components/buttons/Switch';

function App() {
  const lightTheme = 'bg-zinc-100';
  // const darkTheme = 'bg-zinc-800';
  const darkTheme = 'bg-slate-900';

  const lightFont = 'text-zinc-800';
  const darkFont = 'text-zinc-200';

  const [enabled, setEnabled] = useState(false);
  const fontColor = enabled ? darkFont : lightFont

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
      <Page1 fontColor={fontColor} />
      <Page2 fontColor={fontColor} />
      <Page3 fontColor={fontColor} />
      {/* Add a contact form */}
    </div>
  );
}

export default App;
