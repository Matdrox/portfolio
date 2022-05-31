import { useState } from 'react';
import Menu from './components/Menu';
import Themes from './components/buttons/Themes';

function App() {
  const [theme, setTheme] = useState('light');

  // const Mode = (theme) => {
  //   if (theme == 'light') {
  //     return `bg-zinc-100`;
  //   } else {
  //     return `bg-zinc-900`;
  //   }
  // };

  return (
    // <div className={Mode(theme)}>
    <div className={theme}>
      <Themes changeTheme={theme => setTheme(theme)} />
      <div className='p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4'>
        <div>
          <div className='text-xl font-medium text-black'>ChitChat</div>
          <p className='text-slate-500'>You have a new message!</p>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default App;
