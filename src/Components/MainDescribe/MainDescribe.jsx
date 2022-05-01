import AboutMyLife from '../AboutMyLife/AboutMyLife'
import Experiences from '../Experiences/Experiences'
import Studies from '../Studies/Studies'

import { MainContent } from './styles'

const MainDescribe = ({ describeData }) => {
  console.log(describeData)
  return (
    <MainContent>
      <AboutMyLife describeData={describeData.aboutMyLife} />
      <Experiences describeData={describeData.experiences} />
      <Studies describeData={describeData.studies} />
    </MainContent>
  )
}

export default MainDescribe
