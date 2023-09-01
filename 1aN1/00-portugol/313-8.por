programa
{
	real validos, nulos, brancos, total
	real percValidos, percNulos, percBrancos
	funcao inicio()
	{
		escreva("Número de válidos: ")
		leia(validos)
		escreva("Número de nulos: ")
		leia(nulos)
		escreva("Número de brancos: ")
		leia(brancos)
		total = validos + nulos + brancos

		percValidos = validos / total * 100
		percNulos = nulos / total * 100
		percBrancos = brancos / total * 100

		escreva("Total de votos: " + total)
		escreva("\nPercentual de válidos: " + percValidos)
		escreva("\nPercentual de nulos: " + percNulos)
		escreva("\nPercentual de brancos: " + percBrancos)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 598; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */