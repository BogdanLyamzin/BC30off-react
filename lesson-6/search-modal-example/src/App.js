import PostsSearch from "./modules/PostsSearch";

import './App.css';

const styles = {
  zIndex: 10,
  position: "relative",
  backgroundColor: "#fff",
  height: "100px"
}

function App() {
  return (
    <div className="App">
      <div style={styles}></div>
      <PostsSearch />

    </div>
  );
}

export default App;
