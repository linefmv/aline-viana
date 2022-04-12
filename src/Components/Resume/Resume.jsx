import { Name } from './styles';

const Resume = (props) => {
    return (
            <Name>{props.database.aboutMe[0].name}</Name>
)
}

export default Resume;