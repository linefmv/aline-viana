import "./App.css";
import React, { useEffect, useState } from "react";
import getData from "./services/api";
import MenuLeft from "./Components/MenuLeft/MenuLeft";
import Resume from "./Components/Resume/Resume";
import MainDescribe from "./Components/MainDescribe/MainDescribe";
import Menu from "./Components/Menu/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await getData();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Menu />
      <Routes>
        {data && (
          <Route
            exact
            path="/"
            element={
              <main>
                <MenuLeft />
                <MainDescribe describeData={data} />
                <Resume aboutMeData={data.aboutMe[0]} />
              </main>
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
