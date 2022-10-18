import Carro from "./Carro";

function Garagem(props) {
console.log(props);


  return (
    <div>
      <h1>Garagem de {props.nome} </h1>
      <button onClick={()=>props.funcao(props.nome)}>Boas Vindas</button>
      <Carro 
      carro={props.carro1}
      />
      <Carro 
      carro={props.carro2}
      />
      <Carro 
      carro={props.carro3}
      />
    </div>
  );
}

export default Garagem;
