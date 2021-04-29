import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1> Conversor de moedas</h1>
        <img
          className="coin-title"
          src="https://www.svgrepo.com/show/224264/coins-dollar.svg"
          alt="Coins"
        ></img>
      </div>
      <div className="linha">
        <Conversor originCurrency="USD" finalCurrency="BRL"></Conversor>
        <Conversor originCurrency="BRL" finalCurrency="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor originCurrency="CAD" finalCurrency="BRL"></Conversor>
        <Conversor originCurrency="BRL" finalCurrency="CAD"></Conversor>
      </div>
      <div className="linha">
        <Conversor originCurrency="EUR" finalCurrency="BRL"></Conversor>
        <Conversor originCurrency="BRL" finalCurrency="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
