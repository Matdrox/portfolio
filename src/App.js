import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Switch from './components/buttons/Switch';
import LangButton from './components/buttons/LangButton';
import imgArrow from './img/arrow.png';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-235238761-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const lightTheme = 'bg-zinc-100';
  const darkTheme = 'bg-zinc-800';

  const lightBox = 'bg-white';
  const darkBox = 'bg-zinc-700';

  const lightFont = 'text-zinc-800';
  const darkFont = 'text-zinc-200';

  const [enabled, setEnabled] = useState(false);
  const [lang, setLang] = useState('english');

  const fontColor = enabled ? darkFont : lightFont;
  const boxColor = enabled ? darkBox : lightBox;

  return (
    <div
      className={`transition ease-in-out duration-500 pb-24 ${
        enabled ? darkTheme : lightTheme
      }`}
    >
      <Switch
        enabled={enabled}
        setEnabled={setEnabled}
        onClick={() => setEnabled(!enabled)}
      />
      <LangButton text={lang ? 'EN' : 'IA'} onClick={() => setLang(!lang)} />
      <div className='text-zinc-400 top-[40px] right-14 m-10 absolute font-serif font-homemade md:right-20'>
        <img src={imgArrow} className='-rotate-[60deg]  md:rotate-0'/>
        <p className='absolute ml-24 -mt-3 md:-ml-2 md:mt-2'>{lang ? 'english' : 'interlingua'}</p>
      </div>
      <Page1 fontColor={fontColor} lang={lang} />
      <Page2 fontColor={fontColor} lang={lang} boxColor={boxColor} />
      <Page3 fontColor={fontColor} lang={lang} boxColor={boxColor} />
    </div>
  );
}

export default App;
