import Section from "./shared/components/Section";

import HeaderMenu from "./modules/HeaderMenu";
// import MyBooks from "./modules/MyBooks";

import data from "./data";

import './shared/styles/common.scss';

function App() {
  return (
    <div className="App">
      <Section>
        <HeaderMenu items={data.headerMenu} />
      </Section>
      <Section>
        
      </Section>    
      {/* <Section title="Список книг">
        
      </Section> */}
    </div>
  );
}

export default App;
