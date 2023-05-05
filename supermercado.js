// let itens = []

// document.querySelector('input[name=cadastrar]')
// .addEventListener('click', () => {
//     const nomeProduto = document.querySelector('input[name=nome-produto]')
//     const precoProduto = document.querySelector('input[name=valor-produto]')

//         itens.push({
//             nome: nomeProduto.value,
//             valor: precoProduto.value
//         })

//         const listaProdutos = document.querySelector('.lista-produtos')
//         let soma = 0

//         listaProdutos.innerHTML = ''
//         itens.map((val) => {
//             soma += Number(val.valor)
//             listaProdutos.innerHTML += `
//             <div class="lista-produto-single">
//                 <h3>${val.nome}</h3>
//                 <h3 class="price-produto"><span> R$ ${val.valor}</span></h3>
//                 <input type="button" value="" onclick="removerProduto()"></input>
//             </div>
//             `
//         })
//         soma = soma.toFixed(2)
//         nomeProduto.value = ''
//         precoProduto.value = ''

//         const elementoSoma = document.querySelector('.soma-produto h1')
//         elementoSoma.innerHTML = `Total: R$ ${soma}`

// })

// document.querySelector('input[name=limpar]')
// .addEventListener('click', () => {
//     itens = []
//     document.querySelector('.lista-produtos').innerHTML = ''
//     document.querySelector('.soma-produto h1').innerHTML = `Total: R$0`
// })

let itens = []
const listaProdutos = document.querySelector('.lista-produtos')
const somaProdutos = document.querySelector('.soma-produto h1')

function adicionarProduto(){
    const nomeProduto = document.querySelector('.nome-produto')
    const valorProduto = document.querySelector('.valor-produto')

    const novoItem = {
        nome: nomeProduto.value,
        valor: valorProduto.value
    }

    itens.push(novoItem)
    nomeProduto.value = ''
    valorProduto.value = ''
    atualizarLista()
}

function atualizarLista(){
    let soma = 0
    
    listaProdutos.innerHTML = ''
    itens.forEach((item, index) => {
        soma += Number(item.valor)
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
        <h3>${item.nome}</h3>
        <h3 class="price-produto"><span> R$ ${item.valor}</span></h3>
        <button class="lixeira" onclick="removerProduto(${index})"><span class="material-symbols-outlined">
        delete
        </span></button>
        </div>
        `
    })

    soma = soma.toFixed(2)
    somaProdutos.innerHTML = `Total: R$ ${soma}`
}

function removerProduto(index){
    let confirmacao = confirm('Tem certeza que quer remover este item da lista?')

    if(confirmacao){
        itens.splice(index, 1)
        atualizarLista()
    }

}

function limpar(){
    itens = []
    document.querySelector('.lista-produtos').innerHTML = ''
    document.querySelector('.soma-produto h1').innerHTML = 'Total R$0'
}