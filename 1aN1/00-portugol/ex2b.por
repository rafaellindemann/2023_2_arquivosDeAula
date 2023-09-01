programa
{
	real cafe, coxinha, halls, doce_de_leite, conta
	funcao inicio()
	{
	
		escreva("Preço do café: ")	// perguntar o preço do café
		leia(cafe)	// ler o preço do café
		escreva("Preço da coxinha: ")	// perguntar o preço da coxinha
		leia(coxinha)	// Ler o preço da coxinha
		escreva("Preço do halls: ")	// perguntar o preço do halls
		leia(halls)	// ler o preço do halls
		escreva("Preço do doce de leite: ")// perguntar o preço do doce de leite
		leia(doce_de_leite)	// ler o preço do doce de leite
		conta = 3*cafe + coxinha + halls + 2*doce_de_leite	// calcular o valor da conta
		escreva("Valor da conta: R$" + conta)// apresentar o resultado
	

	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 548; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */