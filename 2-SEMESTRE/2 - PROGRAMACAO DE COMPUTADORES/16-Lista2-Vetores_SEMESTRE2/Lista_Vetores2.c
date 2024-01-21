//INSTITUTO FEDERAL DO MATO GROSSO DO SUL
//ANALISE E DESENVOLVIMENTO DE SISTEMAS
//BRUNO MATHEUS FALCKETE FONSECA
//MATRICULA: 2021206476034-6
//20/04/2022
//BRUNO.FONSECA@ESTUDANTE.IFMS.EDU.BR

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>
#include <locale.h>

//PROTOTIPOS PROCEDIMENTOS
void one();
void two();
void three();
void four();

//PROGRAMA PRINCIPAL
int main(){
    setlocale(LC_ALL, "portuguese-brazilian");
    int escolha, contador_geral = 1;

    while(contador_geral == 1){

        printf("\n1 - um() Fa�a um programa que declare um vetor de sete n�meros inteiros. O usu�rio deve informar, a sequ�ncia inversa das posi��es, os valores a serem armazenados. Ao final seu programa dever� imprimir todos os elementos do vetor, com suas respectivas posi��es.\n");

        printf("\n2 - dois() Fa�a um programa que declare um vetor de seis n�meros inteiros. Inicialize todas as posi��es do vetor com o valor zero. O usu�rio dever� povoar o vetor em qualquer ordem. Para tal seu programa dever� solicitar as posi��es (�ndices) e os valores a serem inseridos nas respectivas posi��es. Ao final seu programa dever� imprimir todos os elementos do vetor, com suas respectivas posi��es.\n");

        printf("\n3 - tres() Fa�a um programa que declare um vetor de vinte n�meros inteiros. O programa dever� atribuir em cada posi��o um n�mero aleat�rio entre 1 e 10. Verifique a exist�ncia de elementos iguais a 7,mostrando as posi��es que esses elementos apareceram.\n");

        printf("\n4 - quatro() Fa�a um programa que declare um vetor de vinte n�meros inteiros. O programa dever� atribuir em cada posi��o um n�mero aleat�rio entre 1 e 10.\n      Calcule e mostre:\n  - A quantidade de n�meros pares;\n  - A posi��o dos n�meros pares;\n  - A quantidade de n�meros �mpares;\n  - A posi��o dos n�meros �mpares;\n");

        printf("\n5 - SAIR !!\n");

        printf("\nEscolha: ");

            scanf("%d" , &escolha);

        switch(escolha){

            case 1:
                one();
            break;

            case 2:
               two();
            break;

            case 3:
                three();
            break;

            case 4:
                four();
            break;

            case 5:
                contador_geral++;
            break;

            //OPCAO INVALIDA
            default:
                printf("Opcao Invalida !!");
        }

    }
    return 0;
}

void one(){
    int numeros[7], contador = 0, aux = 0;

    printf("Entre com os numeros:\n");

    for (contador = 6; contador >= 0; contador--){

        aux = aux + 1;
        printf("Entre com o %d� numero: ", aux);
            scanf("%d", &numeros[contador]);
    }

    printf("\n");

    for(contador = 0; contador <= 6; contador++){
        printf("%d� posi��o �: %d\n", contador+1 , numeros[contador]);
    }
}

void two(){
    int numeros[6], contador = 0, contador2 = 0;

    for(contador2 = 0; contador2 <= 5; contador2++){
        printf("Entre com a posicao (0 a 5): ");
            scanf("%d",&contador);
        printf("Entre com o valor: ");
            scanf("%d",&numeros[contador]);
    }

    printf("\n");

    for(contador2 = 0; contador2 <= 5; contador2++){
        printf("%d� posi��o �: %d\n", contador2 , numeros[contador2]);
    }
}

void three(){
    int numeros[20], contador;

    for(contador = 0; contador <= 19; contador++){
        numeros[contador] = rand() % 10;
    }

    printf("\n");

    for(contador = 0; contador <= 19; contador++){
        printf("%d� posi��o �: %d\n", contador, numeros[contador]);
    }

    printf("\n");

    for(contador = 0; contador <= 19; contador++){
        if (numeros[contador] == 7){
           printf("Na posi��o %d tem o n�mero 7\n", contador);
       }
    }
}

void four(){
    int numeros[20], contador, pares = 0, impares = 0;

    for(contador = 0; contador <= 19; contador++){
        numeros[contador] = rand() % 10;
    }

    printf("\n");

    for(contador = 0; contador <= 19; contador++){
        printf("%d� posi��o �: %d\n", contador, numeros[contador]);
    }

    printf("\n");

    for(contador = 0; contador <= 19; contador++){
        if (numeros[contador] % 2 == 0){
            printf("Na posi��o %d tem o n�mero par: %d\n", contador, numeros[contador]);
            pares++;
       }
    }
    printf("Tem um total de %d numero pares\n", pares);

    printf("\n");

    for(contador = 0; contador <= 19; contador++){
        if (numeros[contador] % 2 == 1){
           printf("Na posi��o %d tem o n�mero impar: %d\n", contador, numeros[contador]);
           impares++;
       }
    }
    printf("Tem um total de %d numero impares\n", impares);
}
