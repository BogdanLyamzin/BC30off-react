import Section from "./shared/components/Section";

import MyBooks from "./modules/MyBooks";

import './shared/styles/common.scss';

function App() {
  return (
    <div className="App">  
      <Section>
        <MyBooks />
      </Section>
    </div>
  );
}

export default App;
