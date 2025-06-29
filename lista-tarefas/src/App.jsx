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


const addTarefa = (text, category) => {

  const newTarefas =[...tarefas, {
    id:Math.floor(Math.random() * 1000000),
    text,
    category,
    isCompleted: false,
  }
]
setTarefas(newTarefas)
}

const removeTarefa = (id) => {
    const newTarefas = [...tarefas]
    const filteredTarefas = newTarefas.filter(tarefa => tarefa.id !== id ? tarefa : null)
    setTarefas(filteredTarefas)

}

const completeTarefa = (id) => {
  const newTarefas = [...tarefas]
  newTarefas.map((tarefa) => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa)
  setTarefas(newTarefas)
}

  return <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="a-fazer">
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id}tarefa={tarefa} removeTarefa={removeTarefa} completeTarefa={completeTarefa}/>
))}

      </div>
      <TarefaForm addTarefa={addTarefa}/>
</div>
  
}

export default App
