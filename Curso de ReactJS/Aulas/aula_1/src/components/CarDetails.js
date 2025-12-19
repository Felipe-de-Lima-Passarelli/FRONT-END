const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>
          Marca: <strong>{brand}</strong>
        </li>
        <li>
          KM: <strong>{km}</strong>
        </li>
        <li>
          Cor: <strong>{color}</strong>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
