const textoInput = document.getElementById('texto')
const resultadoInput = document.getElementById('resultado')
const criptografarButton = document.getElementById('criptografar')
const descriptografarButton = document.getElementById('descriptografar')
const copiarButton = document.getElementById('copiar')

const alfabeto = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

const regra = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u'
}

function criptografarTexto() {
  const texto = textoInput.value.toLowerCase()
  let textoCriptografado = ''

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i]
    if (alfabeto.hasOwnProperty(letra)) {
      textoCriptografado += alfabeto[letra]
    } else {
      textoCriptografado += letra
    }
  }

  resultadoInput.value = textoCriptografado
}

function descriptografarTexto() {
  const texto = textoInput.value.toLowerCase()
  let textoDescriptografado = ''

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i]
    for (const chave in regra) {
      if (regra[chave].includes(letra)) {
        textoDescriptografado += chave
        break
      }
    }

    if (textoDescriptografado.length === 0) {
      textoDescriptografado += letra
    }
  }

  resultadoInput.value = textoDescriptografado
}

function copiarTexto() {
  const texto = resultadoInput.value
  navigator.clipboard.writeText(texto)
}

criptografarButton.addEventListener('click', criptografarTexto)
descriptografarButton.addEventListener('click', descriptografarTexto)
copiarButton.addEventListener('click', copiarTexto)
