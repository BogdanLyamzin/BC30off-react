import Section from "./shared/components/Section";

import HeaderMenu from "./modules/HeaderMenu";
import MyBooks from "./modules/MyBooks";

import data from "./data";

import './shared/styles/common.css';

function App() {
  return (
    <div className="App">
      <Section>
        <HeaderMenu items={data.headerMenu} />
      </Section>
      <Section title="Мои книги">
        <MyBooks />
      </Section>
    </div>
  );
}

export default App;
