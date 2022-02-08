import './App.css';
const name = "Bogdan";
const place = "Hell";
const user = {
  name: "Алекс",
  lastName: "Гийом-Василь"
};
const arr = ["Услышь мой рёв!", "Нам - ярость!", "Несломленные. Несгибаемые. Несдающиеся"]
function App() {
  return (
    <>
    <div className="App">
      {arr}
      {/* {user} */}
      {null}
      {true}
      {false}
      {undefined}
      <div className="header" />
      {/* class => className */}
      <p>{name === "Антон" ? "Добро пожаловать" : "Никого нет дома"}</p>
      <p>{`Welcome to ${place}`}</p>
      <button type="button">Нажми меня</button>
      <div>
        <label htmlFor="FIO">ФИО</label>
        {/* for => htmlFor */}
        <img src="" />
        <input id="FIO" placeholder="ФИО" autoFocus disabled />
        {/* autofocus => autoFocus */}
      </div>
      {/* createElement("button", {}, "Нажми меня") */}
    </div>
    <div className="footer"></div>
    </>
  );
}

export default App;
