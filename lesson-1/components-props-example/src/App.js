
// import {arr} from "./components/Header"
import Header from "./components/Header"
import Button from "./components/Button"
import List from "./components/List";
import Section from "./components/Section";

import data from "./data";

import './App.css';

// console.log(arr)

const buttonProps = {
  text: "Нажми меня",
}


function App() {
  return (
    <div className="App">
      <Header />
      {/* Header() */}
      <Button {...buttonProps} name="Маша" />
      {/* Button({text: "Нажми меня", type: "button"}) */}
      <Button text="Съешь меня" type={1} />
      {/* Button({text: "Съешь меня", type: "submit"}) */}
      <Section title="Список Великих Домов Вестероса">
          <List items={data.houses} />
      </Section>
      <Section title="Список вольных городов Эссоса">
          <List title="Вольные города Эссоса" />
      </Section>

    </div>
  );
}

export default App;
