programa
{
	real salario_diario, salario
	inteiro dias
	funcao inicio()
	{
		// perguntar o salário
		escreva("Digite seu salário: ")
		// receber a resposta
		leia(salario)
		// perguntar o número de dias trabalhados
		escreva("Digite quantos dias você trabalha por mês: ")
		// receber a resposta
		leia(dias)
		// calcular o salário diário
		salario_diario = salario / dias
		// mostrar o resultado
		escreva("Salario diário: R$" + salario_diario)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 34; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {salario_diario, 3, 7, 14}-{salario, 3, 23, 7}-{dias, 4, 9, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */