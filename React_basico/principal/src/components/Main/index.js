import React from 'react';

import './styles.css';

export default props => {

    const [tarefas, setTarefas] = React.useState([]);
    const [tarefaForm, setTarefaForm] = React.useState('');
    const [errors, setErrors] = React.useState('');

    function handleTarefas() {

        if (!tarefaForm) {
            setErrors('Digite um valor');
            return;
        }

        if (tarefas.includes(tarefaForm)) {
            setErrors('tarefa já existe');
        } else {
            setErrors('');
            setTarefas([...tarefas, tarefaForm]);

        }
    }

    function deleteItem(tarefa) {
        const newTarefas = tarefas.filter(t => t !== tarefa);
        setTarefas(newTarefas);
    }

    return (

        <div className="main">
            <h1>Lista de tarefas</h1>

            <form action="#">
                <input type="text" onChange={(e) => setTarefaForm(e.target.value)} />
                <div className="errors">{errors && errors}</div>
                <button type="submit" onClick={handleTarefas}>Enviar</button>
            </form>

            <ul>
                {
                    tarefas.map( tarefa => (
                        <li key={tarefa}>
                            {tarefa}
                            <button onClick={() => deleteItem(tarefa)}>x</button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}