import Form from './components/Form';
import useDarkMode from 'use-dark-mode';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const darkMode = useDarkMode(false);
  return (
    <>
      <main
        className={`w-screen h-screen flex justify-center items-center ${
          darkMode.value ? 'dark' : ''
        } text-foreground bg-secondary`}
      >
        {/* <ThemeSwitcher /> */}
        <Form />
      </main>
    </>
  );
}

export default App;
