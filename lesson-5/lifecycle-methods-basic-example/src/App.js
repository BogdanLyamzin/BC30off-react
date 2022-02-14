import { Component } from "react";
import Section from "./shared/components/Section";

import ToggleButton from "./shared/components/ToggleButton";
import MyBooks from "./modules/MyBooks"
import Timer from "./modules/Timer";

import './shared/styles/common.scss';

import "./App.css"

const tabs = [
  {
    id: "1",
    name: "Timer",
    content: <Timer />
  },
  {
    id: "2",
    name: "My Books",
    content: <MyBooks />
  },
]

class App extends Component {
  state = {
    activeTab: 0
  }

  toggleTab = (idx)=> {
    this.setState({
      activeTab: idx
    })
  }

  render() {
    const {activeTab} = this.state;
    const {toggleTab} = this;
    const tabHeading = tabs.map((item, index) => {
      const fullClassName = index === activeTab ? "tab-heading active" : "tab-heading"
      return (
        <span onClick={()=> toggleTab(index)} className={fullClassName} key={item.id}>
          {item.name}
        </span>
      )      
    })

    return (
      <div className="App">
        <Section>
          {/* <button onClick={this.toggleState}>Change state</button> */}
          {/* <ToggleButton text="Click me!" /> */}
        </Section> 
        {tabHeading}
        {tabs[activeTab].content}
      </div>
    );
  }

}

export default App;
