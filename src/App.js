import "./App.css";
import React, { useEffect, useState } from "react";
import getData from "./services/api";
import Resume from "./Components/Resume/Resume";
import MainDescribe from "./Components/MainDescribe/MainDescribe";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer"
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
      {data && (
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<MainDescribe describeData={data} />}
            />
          </Routes>
          <Resume aboutMeData={data.aboutMe[0]} />
        </main>
      )}
      <Footer/>
    </>
  );
}

export default App;
