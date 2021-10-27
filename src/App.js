import "./App.css";
import ChildsOnReact from "./components/CenteredCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="ChildOnReact--title">DEVDelivery</h1>
        <div className=" ChildOnReact--menuInicial">
          <ul>
            <li>
              <ChildsOnReact children={"lanches"} />
            </li>
            <li>
              <ChildsOnReact children={"Pizzas"} />
            </li>
            <li>
              <ChildsOnReact children={"Porçoes"} />
            </li>
            <li>
              <ChildsOnReact children={"bebidas"} />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
