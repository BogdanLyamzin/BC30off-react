import Section from "./shared/components/Section";

import HeaderMenu from "./modules/HeaderMenu";
import FAQItem from "./modules/FAQ/FAQItem";
import ToggleButton from "./shared/components/ToggleButton";
import MyBooks from "./modules/MyBooks";
import PostsSearch from "./modules/PostsSearch"

import data from "./data";

import './shared/styles/common.scss';

function App() {
  return (
    <div className="App">
      <Section>
        {/* <HeaderMenu items={data.headerMenu} /> */}
      </Section>
      <Section>
        {/* <FAQItem question="Сколько студентов" answer="Нисколько" /> */}
        {/* <ToggleButton text="Click me!" /> */}
      </Section>    
      <Section>
        <MyBooks />
      </Section>
      <Section>
        <PostsSearch />
      </Section>
    </div>
  );
}

export default App;
