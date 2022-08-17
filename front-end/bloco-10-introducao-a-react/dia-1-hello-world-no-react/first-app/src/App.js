import logo from './logo.svg';
import './App.css';


const lista = ['por água na panela', 'esquentar água', 'passar água no café', 'beber café'];

const Task = (value) => {
  const tarefas = value.map((tarefa, index) => <li key={index}>{tarefa}</li>)
  return (
    tarefas
  );
}

function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ol>{Task(lista)}</ol>
    </div>
  );
}

export default App;

// 🚀 Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
// ⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️
// 🚀 Crie uma lista de tarefas simples seguindo os passos abaixo:
// insira a função Task a seguir acima do seu componente App dentro do arquivo App.js:
// Copiar
// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.
// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.
