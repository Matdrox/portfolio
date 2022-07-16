import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Switch from './components/buttons/Switch';
import LangButton from './components/buttons/LangButton';

function App() {
	// Not working?
	useEffect(() => {
		ReactGA.initialize('G-EMFTQMKQ7J');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const lightTheme = 'bg-zinc-100';
	const darkTheme = 'bg-zinc-800';

	const lightBox = 'bg-white';
	const darkBox = 'bg-zinc-900';

	const lightFont = 'text-zinc-800';
	const darkFont = 'text-zinc-200';

	const [enabled, setEnabled] = useState(false);
	const [lang, setLang] = useState('english');

	const fontColor = enabled ? darkFont : lightFont;
	const boxColor = enabled ? darkBox : lightBox;

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
			<LangButton text={lang ? 'EN' : 'IA'} onClick={() => setLang(!lang)} />
			<Page1 fontColor={fontColor} lang={lang} />
			<Page2 fontColor={fontColor} lang={lang} boxColor={boxColor} />
			<Page3 fontColor={fontColor} lang={lang} />
		</div>
	);
}

export default App;
