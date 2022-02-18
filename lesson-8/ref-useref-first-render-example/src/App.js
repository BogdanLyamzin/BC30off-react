import Section from "./shared/components/Section";

import MyBooks from "./modules/MyBooks";
import PostSearch from "./modules/PostsSearch"

import './shared/styles/common.scss';

function App() {
  return (
    <div className="App">
      <Section>
        {/* <PostSearch /> */}
      </Section> 
      <Section>
        <MyBooks />
      </Section>
    </div>
  );
}

export default App;
