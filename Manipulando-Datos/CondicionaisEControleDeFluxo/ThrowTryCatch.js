//  throw

function sayMyName(name = '') {
    if (name === '') {
          throw 'Nome é Obrigatório'
    }

    console.log('depois do erro')
}

// try...catch
try {
    sayMyName('Mayk')
} catch(e) {
    console.log(e)
}