import AboutMyLife from "../AboutMyLife/AboutMyLife";
import Experiences from "../Experiences/Experiences";
import Studies from "../Studies/Studies";

import {
  MainContent,
  MainTitle,
  MainComponent,
  Component,
  ComponentTitle,
  ComponentParagraph,
  ComponentSecundaryTitle,
  ComponentLink,
} from "./styles";

const MainDescribe = ({ describeData }) => {
  console.log(describeData)
  return (
    <MainContent>
      <MainTitle>General</MainTitle>
      <AboutMyLife describeData={describeData.aboutMyLife}/>
      <Experiences describeData={describeData.experiences}/>
      <Studies describeData={describeData.studies}/>
      {/* {describeData.map((item) => {
        return (
          <MainComponent>
            <Component key={item.id}>
              <ComponentSecundaryTitle> {item.title}</ComponentSecundaryTitle>
              <ComponentParagraph>{item.Me }</ComponentParagraph>
              <Component />
             {item.companyName && <ComponentTitle> {item.companyName}</ComponentTitle> }

              <ComponentParagraph>{item.development}</ComponentParagraph>
              <ComponentParagraph>{item.design}</ComponentParagraph>
              <ComponentTitle> {item.companyName}</ComponentTitle>
              <ComponentSecundaryTitle> {item.time}</ComponentSecundaryTitle>
              <ComponentParagraph> {item.aboutExperience}</ComponentParagraph>
              <ComponentParagraph> {item.school}</ComponentParagraph>
              <ComponentParagraph> {item.titleCourse}</ComponentParagraph>
              <ComponentParagraph> {item.aboutCourse}</ComponentParagraph>
              <ComponentLink href={item.link}>{item.scholl}</ComponentLink>
            </Component>
          </MainComponent>
        );
      })} */}
    </MainContent>
  );
};

export default MainDescribe;
