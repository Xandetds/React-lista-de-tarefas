import { useState } from 'react';
import './app.css'
import Tarefa from './components/tarefa';
import TarefaForm from './components/TarefaForm';


function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Ajudar o cliente X",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir ao mercado",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="a-fazer">
      {tarefas.map((tarefa) => (
        <Tarefa tarefa={tarefa}/>
))}

      </div>
      <TarefaForm/>
</div>
  
}

export default App
