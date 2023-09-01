programa
{
	inteiro A, B
	funcao inicio()
	{
		escreva("A: ")
		leia(A)
		escreva("B: ")
		leia(B)
		se(A > B)
		{
			escreva("A é maior: " + A)		
		}senao
		{
			se(B > A)
			{
				escreva("B é maior: " + B)
			}senao
			{
				escreva("Os dois são iguais: " + A)
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 223; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */