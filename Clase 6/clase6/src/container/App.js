import '../styles/App.css';
import ClassComponent from '../components/ClassComponent.jsx';
import FunctionComponent from '../components/FunctionComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <div className="App">
<h3>Invitados:</h3>
<ClassComponent nombre="Nicolas" estaEnLista={true} />
<ClassComponent nombre="Ivan" estaEnLista={false} />
<ClassComponent nombre="Carolina" estaEnLista={true} />
<h3>Tareas: </h3>
<FunctionComponent nombre="Nicolas" tarea="papas fritas" />
<FunctionComponent nombre="Ivan" tarea="pizzas" />
<FunctionComponent nombre="Carolina" tarea="bebidas" />
</div>
</div>
      </header>
    </div>
  );
}

export default App;
