import Form from "./components/Form";
// import useDarkMode from "use-dark-mode";
// import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  //const darkMode = useDarkMode(false);
  return (
    <>
      <main
        className={`flex h-screen w-screen  flex-col items-center justify-center bg-secondary font-primary text-foreground`}
      >
        {/* <ThemeSwitcher /> */}
        <Form />
      </main>
    </>
  );
}

export default App;
