import React from "react";

const Tarefa = ({ tarefa }) =>  {
    return (
        <div className="tarefa">
          <div className="content">
            <p>{tarefa.text}</p>
            <p className="category">
              ({tarefa.category})</p>
          </div>
          <div>
            <button className="complete">Completar</button>
            <button className="remove">X</button>
          </div>
        </div>
    )
}

export default Tarefa