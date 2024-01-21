def verificar_idade(idade):
    if idade < 0:
        return "Idade inválida"
    else:
        if idade < 18:
            return "Menor de idade"
        elif idade >= 18 and idade < 60:
            return "Maior de idade"
        else:
            return "Idoso"
    # Leitura da idade
    idade = int(input("Digite a idade: "))
    # Verificação e exibição do resultado
    resultado = verificar_idade(idade)
    print("Resultado:", resultado)