import React from 'react';

import './styles.css';

import {
    GrEdit, GrClose, FaPlus
} from 'react-icons/all';

const TAREFAS = '@LISTA_TAREFAS';

export default props => {

    const [tarefas, setTarefas] = React.useState([]);
    const [tarefaForm, setTarefaForm] = React.useState('');
    const [errors, setErrors] = React.useState('');

    const [tarefaFormSelected, setTarefaFormSelected] = React.useState('');


    function recuperarTarefas() {
        const tarefasStr = localStorage.getItem(TAREFAS);

        if (tarefasStr !== null) {
            const newTarefasArray = JSON.parse(tarefasStr);
            setTarefas(newTarefasArray);
        }
    }

    function gravarTarefas() {
        let tarefasAntigas = localStorage.getItem(TAREFAS);

        if (tarefasAntigas === null) {
            tarefasAntigas = [];
        }

        const novasTarefas = JSON.stringify([...tarefasAntigas, ...tarefas]);

        localStorage.setItem(TAREFAS, novasTarefas);
    }

    function handleTarefas() {

        const tarefa = tarefaForm.trim();
        console.log(tarefas);

        if (!tarefa) {
            setErrors('Digite um valor');
            return;
        }

        // update
        if (tarefaFormSelected) {
            setTarefaFormSelected('');
            changeItem(tarefa);
            setTarefaForm('');
            // gravarTarefas();
            return;
        }

        if (tarefas.includes(tarefa)) {
            setErrors('tarefa já existe');
        } else {
            setErrors('');
            setTarefas([...tarefas, tarefa]);
            // gravarTarefas();
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
                    tarefas && tarefas.map(tarefa => (
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