programa
{
	real horasTrabalhadas, valorHora, percentualDesconto
	real salarioBruto, totalDesconto, salarioLiquido
	funcao inicio()
	{
		escreva("Horas trabalhadas: ")
		leia(horasTrabalhadas)
		escreva("Valor por hora: R$")
		leia(valorHora)
		escreva("Percentual de desconto: ")
		leia(percentualDesconto)

		salarioBruto = horasTrabalhadas * valorHora
		totalDesconto = (percentualDesconto/100) * salarioBruto
		salarioLiquido = salarioBruto - totalDesconto

		escreva("\n=======================")
		escreva("\nHoras trabalhadas: " + horasTrabalhadas)
		escreva("\nSalário Bruto: R$" + salarioBruto)
		escreva("\nTotal de descontos: R$" + totalDesconto)
		escreva("\nSalário líquido: R$" + salarioLiquido)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 520; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */