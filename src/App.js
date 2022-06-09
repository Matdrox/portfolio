import { useState, useRef } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Switch from './components/buttons/Switch';

function App() {
  const lightTheme = 'bg-zinc-100';
  // const darkTheme = 'bg-zinc-800';
  const darkTheme = 'bg-slate-900';

  const lightColor =
    'bg-white transition ease-in-out duration-500 rounded shadow-md';
  const darkColor =
    'bg-black transition ease-in-out duration-500 rounded shadow-md';

  const lightFont = 'text-zinc-600';
  const darkFont = 'text-zinc-900';

  const [enabled, setEnabled] = useState(false);

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
      <Page1 changePrimary={enabled ? darkColor : lightColor} />
      <Page2 />
      <Page3 />
      {/* Add a contact form */}
    </div>
  );
}

export default App;
