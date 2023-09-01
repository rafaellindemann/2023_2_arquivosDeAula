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
			escreva("\nO B, coitado, era: " + B)	
		}

		se(B > A)
		{
			escreva("B é maior: " + B)
		}

		se(A == B)
		{
			escreva("Os dois são iguais: " + A)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 160; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {A, 3, 9, 1}-{B, 3, 12, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */