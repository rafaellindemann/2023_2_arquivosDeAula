programa
{
	real poupanca, salario 
	real moradia, agua, luz, internet, gasolina, netflix, telefone, outros
	
	funcao inicio()
	{
		escreva("Salário: ")
		leia(salario)
		escreva("Moradia: ")
		leia(moradia)
		escreva("Água: ")
		leia(agua)
		escreva("Luz: ")
		leia(luz)
		escreva("Internet: ")
		leia(internet)
		escreva("Gasolina: ")
		leia(gasolina)
		escreva("Netflix: ")
		leia(netflix)
		escreva("Telefone: ")
		leia(telefone)
		escreva("Outros: ")
		leia(outros)

		poupanca = salario - (moradia+agua+luz+internet+gasolina+netflix+telefone+outros)
		escreva("Valor para a poupança: R$" + poupanca)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 610; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */