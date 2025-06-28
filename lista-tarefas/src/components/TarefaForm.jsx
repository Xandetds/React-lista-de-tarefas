import React from "react";

const TarefaForm = () => {
    return <div className="tarefa-form"> 
        <h2>Criar Tarefa</h2>
        <form>
            <input type="text" placeholder="Digite o titulo"/>
            <select>
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