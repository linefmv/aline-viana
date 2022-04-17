import {Name, History, Content, Image, SocialMedia, Email, Linkedin, Github, SocialImages} from './styles';

import GithubIcon from './../../assets/github.svg';
import Me from '../../assets/me.jpeg';

const Resume = ({aboutMeData}) => {
    return (

        <Content>
            <Image src={Me}></Image>
            <Name>{aboutMeData.fullName}</Name>
            <History>{aboutMeData.history}</History>
            <SocialMedia>
                <Email href="alinemaciel018@gmail.com">Email</Email>
                <Linkedin href="linkedin.com/linefmv">Linkedin</Linkedin>
                 <Github href="github.com/linefmv">Github</Github>
            </SocialMedia>
        </Content>
    )
}

export default Resume;