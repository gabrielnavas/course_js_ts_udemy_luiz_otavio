import React from 'react';

import './styles.css';

import {
    GrEdit, GrClose, FaPlus
} from 'react-icons/all';

export default props => {

    const [tarefas, setTarefas] = React.useState([]);
    const [tarefaForm, setTarefaForm] = React.useState('');
    const [errors, setErrors] = React.useState('');

    const [tarefaFormSelected, setTarefaFormSelected] = React.useState('');

    function handleTarefas() {

        if (!tarefaForm) {
            setErrors('Digite um valor');
            return;
        }

        if(tarefaFormSelected) {
            setTarefaFormSelected('');
            changeItem(tarefaForm);
            return;
        }


        if (tarefas.includes(tarefaForm)) {
            setErrors('tarefa já existe');
        } else {
            setErrors('');
            setTarefas([...tarefas, tarefaForm]);

        }
    }

    function changeItem(novaTarefa) {
        const newTarefas = tarefas
            .map(t => t === tarefaFormSelected ? novaTarefa : t);

        setTarefas(newTarefas);    
    }

    function deleteItem(tarefa) {
        const newTarefas = tarefas.filter(t => t !== tarefa);
        setTarefas(newTarefas);
    }

    function editItem(tarefa) {
        setTarefaFormSelected(tarefa);
    }

    return (

        <div className="main">
            <h1>Lista de tarefas</h1>

            <form action="#">
                <input type="text" onChange={(e) => setTarefaForm(e.target.value)} />

                <button type="submit" onClick={handleTarefas}>
                    <FaPlus />
                </button>
            </form>
            <div className="errors">{errors && errors}</div>

            <ul>
                {
                    tarefas.map(tarefa => (
                        <li key={tarefa}>
                            <h5>{tarefa}</h5>
                            <div className="actions">
                                <button onClick={() => deleteItem(tarefa)}><GrClose /></button>
                                <button onClick={() => editItem(tarefa)}><GrEdit /></button>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}