programa
{
	inteiro pontuacao
	funcao inicio()
	{
		escreva("Pontos: ")
		leia(pontuacao)
		se(pontuacao <= 10)
		{
			escreva("Deu ruim")
		}
		se(pontuacao>10 e pontuacao<=100)
		{
			escreva("Em  briga de saci todo chute é voadora")
		}
		se(pontuacao>100 e pontuacao<=200)
		{
			escreva("Supimpa!")
		}
		se(pontuacao > 200)
		{
			escreva("Mitou")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 54; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */