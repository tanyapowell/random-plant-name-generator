import logo from "./logo.svg";
import "./App.css";
import PlantNames from "./Plantnames";

function App() {
  const bestestPlants = [
    "Greeny",
    "Maximus",
    "Rose",
    "Jose",
    "Aisha",
    "Ilhaan",
    "Helene",
    "Annabel",
    "Tanya",
  ];

  const badPlants = ["John", "Kevin"];

  return (
    <div className="parent">
      <h1>Team Dopeness Random Plant Name Generator</h1>
      <PlantNames names={bestestPlants} title="These are our fave names" />
      <PlantNames names={badPlants} title="We don't like these names" />
    </div>
  );
}

export default App;
