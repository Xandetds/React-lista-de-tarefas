import {useState} from "react";

const TarefaForm = ({addTarefa}) => {
    const [value, setValue] =useState ("")
    const [category, setCategory] =useState ("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTarefa(value, category);
        setValue("");    
        setCategory("");
    }

    return <div className="tarefa-form"> 
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Digite o titulo" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar tarefa</button>

        </form>
    </div>
}

export default TarefaForm