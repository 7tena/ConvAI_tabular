import "./App.css";
import InputCard from "./components/userInput";
import LandingPage from "./components/landingPage";
import Benefits from "./components/benefits";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <br/>
      <InputCard />
      <br/>
      <Benefits />
    </div>
  );
}

export default App;
