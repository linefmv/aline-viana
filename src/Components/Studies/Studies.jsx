import {
  Component,
  ComponentTitle,
  ComponentParagraph,
  ComponentSecundaryTitle,
  ComponentLink,
  Title,
} from "./styles";

const Studies = ({ describeData }) => {
  console.log(describeData);
  return (
    <>
      <Title>Courses</Title>
      {describeData.map((item) => {
        return (
          <>
            <Component key={item.id}>
              <ComponentTitle>{item.name}</ComponentTitle>
              <ComponentSecundaryTitle> {item.title}</ComponentSecundaryTitle>
              <ComponentParagraph> {item.about}</ComponentParagraph>
              <ComponentLink href={item.link}>{item.name}</ComponentLink>
            </Component>
          </>
        );
      })}
    </>
  );
};

export default Studies;
