import React from "react";
import datos from '../data/datos.json'

class App extends React.Component {
  render() {
    //console.log(datos);

    return (
    <div>
      {datos.map((item, i) => (<h1 key={i}>{item.texto}</h1>))}
      <h1>MUNDO</h1>
    </div>
    );
  }
}

export default App;