import Section from "./shared/components/Section";

import HeaderMenu from "./modules/HeaderMenu";
import FAQItem from "./modules/FAQ/FAQItem"
import ToggleButton from "./shared/components/ToggleButton";
import Feedback from "./modules/Feedback/Feedback"

import data from "./data";

import './shared/styles/common.scss';

function App() {
  return (
    <div className="App">
      <Section>
        <HeaderMenu items={data.headerMenu} />
        {/* const obj = new HeaderMenu({items: data.headerMenu});
        obj.render() */}
      </Section>
      <Section>
        <FAQItem question="Сколько студентов" answer="Нисколько" />
        <ToggleButton text="Click me!" />
      </Section>    
      <Section>
        <Feedback />
      </Section>
    </div>
  );
}

export default App;
