// callback function

function sayMyName(name) {
  console.log('antes de executar a função callback')

  nome()

  console.log('depois de execurar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)