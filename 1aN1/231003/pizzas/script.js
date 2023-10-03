let opcoes = document.getElementById('selTamanho')
let resultado = document.getElementById('divResultado')
function verPreco(){
    let tamanho = opcoes.value
    console.log(tamanho);
    let preco;
    switch(tamanho){
        case "Gigante": preco = 30;
                        break
        case "Grande": preco = 29.90;
                        break
        case "Broto": preco = 27;
                        break
    }

    resultado.innerHTML = "Preço: R$" + preco.toFixed(2)
   
}