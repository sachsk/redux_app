import './App.css';
import ResponsiveAppBar from "./Components/NavBar";
import AddSubBalanceContainer from "./Components/AddSubBalanceContainer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
        <AddSubBalanceContainer/>
    </div>
  );
}

export default App;
