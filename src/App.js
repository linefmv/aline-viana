import './App.css';
import React, {useEffect, useState} from 'react';
import getData from './services/api';
import MenuLeft from "./Components/MenuLeft/MenuLeft";
import Resume from "./Components/Resume/Resume";
import MainDescribe from "./Components/MainDescribe/MainDescribe";


function App() {
    let [data, setData] = useState('')

    useEffect(() => {
        getData()
            .then(response => setData(response));
    }, [])


  return (
    <>
        <main>
        <MenuLeft />
        <MainDescribe />
        <Resume database={data}/>
        </main>
    </>
  );
}

export default App;