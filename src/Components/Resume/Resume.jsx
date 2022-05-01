import { Name, History, Content, Image, SocialMedia } from './styles'

import Me from '../../assets/img/me.jpeg'

const Resume = ({ aboutMeData }) => {
  return (
    <Content>
      <Image src={Me} />
      <Name>{aboutMeData.fullName}</Name>
      <History>{aboutMeData.history}</History>
      <SocialMedia>
        <a href='mailto:alinemaciel018@gmail.com'>Email</a>
        <a href='https://linkedin.com/linefmv'>Linkedin</a>
        <a href='https://github.com/linefmv'>Github</a>
      </SocialMedia>
    </Content>
  )
}

export default Resume
