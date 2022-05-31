import Menu from './components/Menu';
import DarkMode from './components/buttons/DarkMode';

function App() {
  const darkMode = false;
  const Mode = (darkMode) => {
    if (darkMode) {
      return `bg-zinc-900`;
    } else {
      return `bg-zinc-100`;
    }
  };

  return (
    <div className={Mode(darkMode)}>
      <DarkMode />
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
