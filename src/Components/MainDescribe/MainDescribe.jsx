import {
  MainContent,
  MainTitle,
  MainComponent,
  StudiesComponent,
  ComponentTitle,
  ComponentParagraph,
  ComponentSecundaryTitle,
} from "./styles";

const MainDescribe = ({ describeData }) => {
  return (
    <MainContent>
      <MainTitle>General</MainTitle>
      {describeData.map((item) => {
        return (
          <MainComponent>
            <StudiesComponent>
              <ComponentTitle key={item.id}> {item.name}</ComponentTitle>
              <ComponentSecundaryTitle> {item.title}</ComponentSecundaryTitle>
              <ComponentParagraph> {item.about}</ComponentParagraph>
            </StudiesComponent>
          </MainComponent>
        );
      })}
    </MainContent>
  );
};

export default MainDescribe;
