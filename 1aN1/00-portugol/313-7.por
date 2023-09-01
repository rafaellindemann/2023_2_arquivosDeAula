programa
{
	inteiro anos, meses, dias, idade
	funcao inicio()
	{
		escreva("Digite sua idade no formato anos + meses + dias")
		escreva("\nDigite os anos: ")
		leia(anos)
		escreva("...e os meses: ")
		leia(meses)
		escreva("...e pra fechar, os dias: ")
		leia(dias)

		idade = anos*365 + meses*30 + dias
		escreva("Você já viveu " + idade + " dias")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 356; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */