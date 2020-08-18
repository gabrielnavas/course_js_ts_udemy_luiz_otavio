const formSubmit = document.querySelector('#form_inserir');
const tarefa = document.querySelector('#tarefa');

const listaElemento = document.querySelector('#lista');

function getListaLocalStorage() {
    let lista = localStorage.getItem('LISTA_TAREFAS');
    if (!lista) lista = [];
    else lista = JSON.parse(lista);

    return lista;
}

function setListaLocalStorage(lista) {
    localStorage.setItem('LISTA_TAREFAS', JSON.stringify(lista));
}

function criarElementoButtonApagar(id) {
    const button = document.createElement('button');
    button.innerText = 'Apagar';

    button.addEventListener('click', function () {
        removeTarefa(id);
    })

    return button;
}

function criarElementoLi(id, tarefaName) {
    const no = document.createElement('li');

    const htmlTarefa = `${tarefaName} `;
    const button = criarElementoButtonApagar(id);

    no.id = `__${id}`;
    no.innerHTML = htmlTarefa;
    no.appendChild(button);

    return no;
}

function addTarefaListaElemento(id, tarefa) {
    const novaTarefa = criarElementoLi(id, tarefa);
    listaElemento.appendChild(novaTarefa);
}

function removeListaElement(id) {
    const no = document.querySelector(`#__${id}`);
    const pai = no.parentNode;
    pai.removeChild(no);
}

function inserTarefa(id, tarefa) {
    const lista = getListaLocalStorage();
    lista.push({ id, tarefa });
    setListaLocalStorage(lista);

    addTarefaListaElemento(id, tarefa);
}


function removeTarefa(id) {
    const lista = getListaLocalStorage();

    const newLista = lista.filter(obj => obj.id !== id);
    lista = newLista;
    setListaLocalStorage(lista);

    removeListaElement(id);
}

function carregarLista() {
    const lista = getListaLocalStorage();

    lista.forEach(tarefa => {
        addTarefaListaElemento(tarefa.id, tarefa.tarefa);
    });
}

formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();

    const dateNow = Date.now();
    inserTarefa(dateNow, tarefa.value);
})


carregarLista()