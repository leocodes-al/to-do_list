const button = document.querySelector('.button-add')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let listaTarefa = []

/* adicionando tarefa no array e chamando function*/
function adicionarTarefa() {
  listaTarefa.push(input.value)

  /* limpar input */
  input.value = ''

  exibirTarefa()
}

/* exibindo tarefa */
function exibirTarefa() { 
  let novaLi = ''

    /* percorrendo array e adicioanando na novaLi */
  listaTarefa.forEach(tarefa => {
    novaLi = novaLi + `

    <li class="task">
      <img src="./img/checked.png" alt="check-na-tarefa">
      <p>${tarefa}</p>
      <img src="./img/trash.png" alt="tarefa-para-o-lixo">
    </li>
    `
  })

    /* enviando novaLi para o documento */
  listaCompleta.innerHTML = novaLi
}


/* chamando function */
button.addEventListener('click', adicionarTarefa)