import logo from "./logo.svg";
import "./App.css";
import "./components/CenteredCard";
import ChildsOnReact from "./components/CenteredCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChildsOnReact>
          <h1 id="ChildOnReact--title">DEVDelivery</h1>
          <div className=" ChildOnReact--menuInicial">
            <ul>
              <li>Lanches</li>
              <li>Pizzas</li>
              <li>Porções</li>
              <li>bebidas</li>
            </ul>
          </div>
        </ChildsOnReact>
      </header>
    </div>
  );
}

export default App;
