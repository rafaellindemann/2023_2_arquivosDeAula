programa
{
	inteiro dias
	real precoPorDiaria, totalBruto
	funcao inicio()
	{
		// ler o número de diárias
		escreva("Número de dias: ")
		leia(dias)
		// selecionar o preço por diária
		se(dias <= 5)
		{
			precoPorDiaria = 100.0
		}
		
		// calcular o valor das diárias
		totalBruto = dias * precoPorDiaria
		// aplicar o desconto
		// aplicar a multa
		// mostrar os resultados bem bunitinhos
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 314; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */