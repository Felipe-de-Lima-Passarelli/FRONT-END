import "./App.css";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", km: 234 },
  ];

  return (
    <div className="App">
      <h2>Início</h2>
      <ManageData /> {/* Prática com useState */}
      <ListRender /> {/* Renderização de Lista 1.0 */}
      <ConditionalRender /> {/* Renderização Condicional e if else */}
      <ShowUserName name="Matheus" /> {/* Introdução Props */}
      <CarDetails brand="VW" km={100000} color="Azul" /> {/* Destructuring */}
      <ul>
        {/* Renderização de Lista 2.0 */}
        {cars.map((car) => (
          <li key={car.id}>
            ID: {car.id} / MARCA: {car.brand} / COR: {car.color} / KM: {car.km}
          </li>
        ))}
      </ul>
      <Fragments /> {/* React Fragments <> </> */}
    </div>
  );
}

export default App;
