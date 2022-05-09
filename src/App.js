import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyname';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = "Anne"
  return (
    <div className="App">
      <HelloWorld />
      <h1> Olá Rede! </h1>
      <p> Meu primeiro App</p>
      <p> Meu nome é {name}</p>
      <p> </p>
      <p> Utilizando props</p>
      <SayMyName nome="Anne"/>
      <SayMyName nome="João"/>
      <SayMyName nome="Paula"/>
      <p> </p>
      <p>Utilizando props multiplas</p>
      <Pessoa nome="Anne" idade="29" profissao="Programador" foto="http://via.placeholder.com/150" />
      <p>Estilizando</p>
      <Frase />
      <p>React Fragments</p>
      <List />
    </div>
  );
}

export default App;
