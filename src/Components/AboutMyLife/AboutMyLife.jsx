import { Component, ComponentTitle, ComponentParagraph } from "./styles";

const AboutMyLife = ({ describeData }) => {
  return (
    <>
      {describeData.map((item) => {
        return (
          <>
            <Component key={item.id}>
              <ComponentTitle> {item.title}</ComponentTitle>
              <ComponentParagraph>{item.about}</ComponentParagraph>
            </Component>
          </>
        );
      })}
    </>
  );
};

export default AboutMyLife;
