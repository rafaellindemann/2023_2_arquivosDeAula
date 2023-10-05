
let times = [
    {nome: "Tabajara",corPrincipal: "Amarelo",anoFundacao: "1990"},
    {nome: "Guarani de Palhoça",corPrincipal: "Azul",anoFundacao: "1789"},
    {nome: "Farroupilha",corPrincipal: "Verde",anoFundacao: "1788"},
    {nome: "São Paulo de Rio Grande",corPrincipal: "Rosa",anoFundacao: "1780"},
    {nome: "Íbis",corPrincipal: "Vermelho",anoFundacao: "1980"}
]

function mostrarTodos(){
    times.map( (time) => {mostrarTime(time)} )
}
function mostrarTime(time){
    let texto = document.createTextNode(time.nome)
    let nome = document.createElement('h2')
    nome.appendChild(texto)
    nome.setAttribute('class','nomeTime')

    texto = document.createTextNode("Cor principal: "+time.corPrincipal)
    let cor = document.createElement('p')
    cor.appendChild(texto)
    cor.setAttribute('class', 'corTime')

    texto = document.createTextNode('Fundação: ' + time.anoFundacao)
    let ano = document.createElement('p')
    ano.appendChild(texto)
    ano.setAttribute('class', 'anoTime')

    let divTime = document.createElement('div')
    divTime.appendChild(nome)
    divTime.appendChild(cor)
    divTime.appendChild(ano)
    
    divTime.setAttribute("class","card");
    document.getElementById('divPainel').appendChild(divTime)

}