import {
  Component,
  ComponentTitle,
  ComponentParagraph,
  ComponentSecundaryTitle,
} from "./styles";

const Experiences = ({ describeData }) => {
  console.log(describeData);
  return (
    <>
      {describeData.map((item) => {
        return (
          <>
            <Component key={item.id}>
              <ComponentTitle> {item.companyName}</ComponentTitle>
              <ComponentSecundaryTitle> {item.time}</ComponentSecundaryTitle>
              <ComponentParagraph> {item.about}</ComponentParagraph>
            </Component>
          </>
        );
      })}
    </>
  );
};

export default Experiences;
