function Carro(props) {
  // console.log(props);
  return (
    <div>
      <h2>{props.carro.nomeDoCarro}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>É flex?: {props.carro.flex?"Sim":"Não"}</li>
      </ul>
    </div>
  );
}

export default Carro;