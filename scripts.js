const button = document.querySelector('.button-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let listaTarefa = []

/* adicionando tarefa no array e chamando function*/
function adicionarTarefa() {
  listaTarefa.push({
    tarefa: input.value,
    concluida: false
  })

  /* limpar input */
  input.value = ''

  if (input.value === ''){
    alert("Digite uma tarefa!")
    return
  }

  exibirTarefa()
}

/* exibindo tarefa */
function exibirTarefa() {
  let novaLi = ''

  /* percorrendo array e adicioanando na novaLi */
  listaTarefa.forEach((item, posicao) => {
    novaLi = novaLi + `

    <li class="task ${item.concluida && "done"}">
      <img src="./img/checked.png" alt="check-na-tarefa" onclick= "concluirTarefa(${posicao})">
      <p>${item.tarefa}</p>
      <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick= "deletarTarefa(${posicao})">
    </li>
    `
  })

  listaCompleta.innerHTML = novaLi

  /* guardando array no localStorage */
  localStorage.setItem('lista_tarefas', JSON.stringify(listaTarefa))
}

/* concluido tarefa */
function concluirTarefa(posicao) {
  listaTarefa[posicao].concluida = !listaTarefa[posicao].concluida

  /* chamando a func. fazer todo o processo novamente */
  exibirTarefa()
}

/* deletando atraves da posição guardada */
function deletarTarefa(posicao) {
  listaTarefa.splice(posicao, 1)

  /* chamando a func. fazer todo o processo novamente */
  exibirTarefa()
}

/* recarregar localStorage */
function recarregarStorage() {
  /* pegando as tarefas do localStorage */
  const tarefasLocalStorage = localStorage.getItem('lista_tarefas')

  /* condição se Storage estiver vazio */
  if (tarefasLocalStorage) {
    /* modificando para object */
    listaTarefa = JSON.parse(tarefasLocalStorage)
  }

  /* chamando func. */
  exibirTarefa()
}

recarregarStorage()

/* chamando function */
button.addEventListener('click', adicionarTarefa)