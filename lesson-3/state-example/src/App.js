import Section from "./shared/components/Section";

import HeaderMenu from "./modules/HeaderMenu";
import ToggleButton from "./shared/components/ToggleButton";
import BookList from "./modules/BookList/BookList";
import Feedback from "./modules/Feedback/Feedback"
// import MyBooks from "./modules/MyBooks";

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
        {/* <ToggleButton text="Click me!" /> */}
      </Section>    
      {/* <Section title="Список книг">
        <BookList />
      </Section> */}
      <Section>
        <Feedback />
      </Section>
    </div>
  );
}

export default App;
