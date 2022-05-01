import './App.css'
import React, { useEffect, useState } from 'react'
import getData from './services/api'
import Resume from './Components/Resume/Resume'
import MainDescribe from './Components/MainDescribe/MainDescribe'

function App () {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const response = await getData()
    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {data && (
        <main>
          <MainDescribe describeData={data} />
          <Resume aboutMeData={data.aboutMe[0]} />
        </main>
      )}
    </>
  )
}

export default App
