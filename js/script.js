const container = document.querySelector(".main_vitrine")

const playlistContainer = document.querySelector("#playlist_container")

let temporadasSelecionadas = []

//Criar card temporada
function cardPrincipal(temporada) {
  const article = document.createElement("article")
  article.classList.add("main_card")

  const mainCardTop = document.createElement("div")
  mainCardTop.classList.add("main_card_top")

  const h2 = document.createElement("h2")
  h2.innerText = temporada.nome

  const span = document.createElement("span")
  span.innerText= temporada.temporada

  const mainCardBottom = document.createElement("div")
  mainCardBottom.classList.add("main_card_bottom")

  const p = document.createElement("p")
  p.innerText = temporada.sinopse

  const button = document.createElement("button")
  button.innerText = "Adicionar à fila"
  button.id = temporada.id
  button.type = "button"

  mainCardTop.append(h2, span)
  mainCardBottom.append(p, button)
  article.append(mainCardTop, mainCardBottom)

  return article
}

//Listar card
function listarTemporadas() {
  for (let i = 0; i < temporadas.length; i++) {
      let card = cardPrincipal(temporadas[i])
      container.appendChild(card)
  }
}

listarTemporadas()

//Criar card temporada selecionada
function cardTemporadaSelecionada(temporada) {
  const li = document.createElement("li")

  const imgTemporada = document.createElement("img")
  imgTemporada.src = temporada.imagemIcone
  imgTemporada.alt = temporada.nome

  const playlistCenter = document.createElement("div")
  playlistCenter.classList.add("playlist_li_center")

  playlistCenter.insertAdjacentHTML("afterbegin", `
      <div>
          <h4>${temporada.nome}</h4>
          <span>${temporada.temporada}</span>
      </div>
      <div class="playlist_li_playButton">
          <img src="./assets/img/play-icon.png" />
          <span>Assistir agora</span>
      </div>
  `)

  const playlistEnd = document.createElement("div")
  playlistEnd.classList.add("playlist_li_end")

  const button = document.createElement("button")
  button.id = temporada.id

  playlistEnd.appendChild(button)

  li.append(imgTemporada, playlistCenter, playlistEnd)

  return li
}

//Adicionar um evento para adicionar a temporada na fila
container.addEventListener("click", selecionarTemporada)
function selecionarTemporada(event) {

    const elementoHTML = event.target

    if (elementoHTML.tagName == "BUTTON") {
      const idTemporada = elementoHTML.id
      const temporadaEncontrada = temporadas.find((temporada) => temporada.id == idTemporada)
      temporadasSelecionadas.push(temporadaEncontrada)

      listarTemporadasSelecionadas()
    }
}

function listarTemporadasSelecionadas() {
  playlistContainer.innerHTML = ""
  for(let i = 0; i < temporadasSelecionadas.length; i++) {
      const card = cardTemporadaSelecionada(temporadasSelecionadas[i])
      playlistContainer.appendChild(card)
  }
}

//Remover temporada da fila
playlistContainer.addEventListener("click", function(event) {
  const elementoHTML = event.target
  if (elementoHTML.tagName == "BUTTON") {
    elementoHTML.closest("li").remove()

    //capturar o id do button em uma variável
    //usar o find para encontrar a temporada com o id capturado
    //usar o indexof para encontrar o índice da temporada no array tenmporadasSelecionadas
    //remover a temporada com o splice

    //doc find: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //doc indexof: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    //doc splice: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  }
})

//Fazer filtros de temporadas