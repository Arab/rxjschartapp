import "./App.css";
import Chart from "./Components/Chart";
import BTCStream from "./rxjs/BTCStream";
import ETHStream from "./rxjs/ETHStream";

function App() {
  return (
    <div class="App">
      <Chart stream={BTCStream} title="BTC" />
      <Chart stream={ETHStream} title="ETH" />
    </div>
  );
}

export default App;
