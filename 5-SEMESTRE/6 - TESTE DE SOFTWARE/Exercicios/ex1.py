def verificar_aprovacao(nota1, nota2):
    media = (nota1 + nota2) / 2
    if nota1 >= 0 and nota2 >= 0:
        if media >= 6.0:
            return "Aprovado"
        elif media >= 3.0 and media < 6.0:
            return "Exame"
        else:
            return "Reprovado"
    else:
        return "Nota inválida"
# Leitura das notas
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
# Verificação e exibição do resultado
resultado = verificar_aprovacao(nota1, nota2)
print("Resultado:", resultado)


