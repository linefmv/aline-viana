import './App.css'

import MenuLeft from "./Components/MenuLeft/MenuLeft";
import Resume from "./Components/Resume/Resume";
import MainDescribe from "./Components/MainDescribe/MainDescribe";


function App() {
  return (
    <>
        <main>
        <MenuLeft />
        <MainDescribe />
        <Resume />
        </main>
    </>
  );
}

export default App;