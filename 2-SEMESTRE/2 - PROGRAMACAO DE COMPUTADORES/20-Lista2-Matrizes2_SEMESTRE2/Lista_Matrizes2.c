//INSTITUTO FEDERAL DO MATO GROSSO DO SUL
//ANALISE E DESENVOLVIMENTO DE SISTEMAS
//BRUNO MATHEUS FALCKETE FONSECA
//MATRICULA: 2021206476034-6
//12/05/2022
//BRUNO.FONSECA@ESTUDANTE.IFMS.EDU.BR

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>
#include <locale.h>

//FUNCOES MAIN 
void one();
//void two();

//FUNCOES EXERCICIO 1
void imprime_cidade();
void imprime_cidade_especifica();

//FUNCOES EXERCICIO 2
void imprime_elementos();
void imprime_indices();
void imprime_diagonal_lado_a_lado();
void imprime_diagonal_principal();
void imprime_diagonal_e_zeros();
void imprime_acima_da_diagonal();

int main(){
    setlocale(LC_ALL, "portuguese-brazilian");
    int escolha, contador_geral = 1;

    while(contador_geral == 1){

        printf("\n1 - Seu programa deve ler a tabela de dist�ncias entre as cidades (c�digo fornecido abaixo) e gerar uma tabela com as dist�ncias conforme figura. Dever� apresentar o c�digo e o nome das cidades dispon�veis.\nO usu�rio fornecer� os c�digos das cidades de origem e destino e o programa apresentar� a dist�ncia entre estas cidades.\nSeu programa dever� apresentar� tamb�m a cidade com maior dist�ncia da origem (vide figura).\nSeu programa dever� repetir at� que o usu�rio forne�a duas cidades iguais(origem e destino).\nA seguir o c�digo inicial do programa, j� com a inicializa��o da matriz de dist�ncias:\n\n");

        printf("2 - Declare uma matriz 6x6 e Armazene um n�mero aleat�rio em cada elemento da matriz. Da�:\n- Imprima todos os elementos da matriz;\n- Imprima os �ndices das posi��es na matriz;\n- Imprima todos os elementos da diagonal principal (um ao lado do outro);\n- Imprima todos os elementos da diagonal principal;\n- Imprima todos os elementos da diagonal principal e zero nas demais posi��es;\n- Imprima todos os elementos acima da diagonal principal.\n\n");

        printf("3 - SAIR\n\n");

        printf("Escolha: ");
            scanf("%d", &escolha);

        switch(escolha){

            case 1:
                one();
            break;
            
            case 2:
                two();
            break;

            case 3:
                contador_geral++;
            break;

            default:
                printf("\nOp�ao Invalida !!\n\n");
        }
    }

    return 0;
}


void one(){
    
    #define CIDADES 4

     char cidade[CIDADES][12] = {"BEL�M", "FORTALEZA", "MANAUS",
                                "PORTO VELHO"};
    int distancia[CIDADES][CIDADES] =
        {{0, 1611, 5298, 4397},
         {1611, 0, 5763, 4865},
         {5298, 5763, 0, 901},
         {4397, 4865, 901, 0}};
    int contador1, contador2, origem, destino;

    // Exibindo a tabela de dist�ncias
    printf("\n            TABELA DE DIST�NCIAS            ");
    printf("\n============================================\n");
    printf("ORIGEM\t\tDESTINO\t\tDIST�NCIA");
    printf("\n============================================\n");
    for (contador1 = 0; contador1 < CIDADES; contador1++)
    {
        for (contador2 = 0; contador2 < CIDADES; contador2++){

            imprime_cidade(cidade[contador1]);
            if (contador1 == 0 || contador1 == 2){
                printf("\t\t");
            }else{
                printf("\t");
            }

            imprime_cidade(cidade[contador2]);

            if (contador2 == 0 || contador2 == 2){
                printf("\t\t");
            }else{
                printf("\t");
            }
            
            if (distancia[contador1][contador2] == 0){
                printf("---------");
            }else{
                printf("%d", distancia[contador1][contador2]);
            }

            printf("\n");
        }
    }
    printf("============================================\n");

    // Exibindo os c�digos das cidades para o usu�rio
    printf("\nC�digos das cidades: ");
    printf("\n====================\n");
    for (contador1 = 0; contador1 < CIDADES; contador1++){

        printf("%d - ", contador1);
        imprime_cidade(cidade[contador1]);
        printf("\n");
    }

    do{
        // Lendo os c�digos das cidades de origem e destino
        printf("\nC�digo da cidade de origem: ");
        scanf("%d", &origem);
        printf("C�digo da cidade de destino: ");
        scanf("%d", &destino);

        if (origem != destino){
            // Imprimindo a dist�ncia entre as cidades:
            printf("\n Dist�ncia entre ");
            imprime_cidade_especifica(cidade, origem);
            printf(" e ");
            imprime_cidade_especifica(cidade, destino);
            printf(" � de %d km\n", distancia[origem][destino]);

            // Encontrando a cidade mais distante
            int maior = 0;
            contador2 = 0;
            for (contador1 = 0; contador1 < CIDADES; contador1++){
                if (distancia[origem][contador1] > maior){

                    maior = distancia[origem][contador1];
                    contador2 = contador1;
                }
            }

            printf("\nA cidade mais distante de ");
            imprime_cidade_especifica(cidade, origem);
            printf(" � ");
            imprime_cidade(cidade[contador2]);
            printf(". Elas distam %d km\n", maior);
        }else{

            printf("A cidade de origem e de destino s�o iguais. Fim da execu��o.");
        }

    }while (origem != destino);
}

void two(){

    #define TAMANHO 6

    int op = 1, contador1, contador2, num[TAMANHO][TAMANHO];

    for (contador1 = 0; contador1 < TAMANHO; contador1++)
    {
        for (contador2 = 0; contador2 < TAMANHO; contador2++)
        {
            num[contador1][contador2] = rand();
        }
    }

    printf("\n========================================================================\n");
    printf("                    Tabela de op��es para impress�o:                    ");
    printf("\n========================================================================");
    printf("\n1 - Todos os elementos da matriz");
    printf("\n2 - Os �ndices das posi��es na matriz");
    printf("\n3 - Todos os elementos da diagonal principal (um ao lado do outro)");
    printf("\n4 - Todos os elementos da diagonal principal (na diagonal)");
    printf("\n5 - Todos os elementos da diagonal principal e zero nas demais posi��es");
    printf("\n6 - Todos os elementos acima da diagonal principal");
    printf("\n========================================================================\n");

    while (op > 0 && op < 7)
    {
        printf("\nEscolha uma das op��es da tabela: ");
        scanf("%d", &op);
        printf("\n");

        switch (op)
        {
        case 1:
            imprime_elementos(num);
            break;
        case 2:
            imprime_indices();
            break;
        case 3:
            imprime_diagonal_lado_a_lado(num);
            break;
        case 4:
            imprime_diagonal_principal(num);
            break;
        case 5:
            imprime_diagonal_e_zeros(num);
            break;
        case 6:
            imprime_acima_da_diagonal(num);
            break;

        default:
            printf("Essa n�o � uma das op��es! Fim da execu��o.");
            break;
        }
    }
}


//FUNCOES EXERCICIO 1

void imprime_cidade(char cidade[]){
    printf("%s", cidade);
}

void imprime_cidade_especifica(char cidade[][12], int contador1){
    printf("%s", cidade[contador1]);
}

//FUNCOES EXERCICIO 2

//Fun��o que imprime todos os elementos da matriz
void imprime_elementos(int num[TAMANHO][TAMANHO]){
    int contador1, contador2;
    printf("Imprime todos os elementos da matriz: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            printf("%d\t", num[contador1][contador2]);
        }
        printf("\n");
    }
}

// Fun��o que imprime os �ndices das posi��es na matriz;
void imprime_indices(){
    int contador1, contador2;
    printf("Imprime os �ndices das posi��es na matriz: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            printf("%d %d\t", contador1, contador2);
        }
        printf("\n");
    }
}

// Fun��o que imprime todos os elementos da diagonal principal (um ao lado do outro);
void imprime_diagonal_lado_a_lado(int num[TAMANHO][TAMANHO]){
    int contador1, contador2;
    printf("Imprime todos os elementos da diagonal principal: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            if (contador1 == contador2){
                printf("%d\t", num[contador1][contador2]);
            }
        }
    }
    printf("\n");
}

// Fun��o que imprime todos os elementos da diagonal principal;
void imprime_diagonal_principal(int num[TAMANHO][TAMANHO]){
    int contador1, contador2;
    printf("Imprime todos os elementos da diagonal principal: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            if (contador1 == contador2){
                printf("%d\t", num[contador1][contador2]);
            }else{
                printf("\t");
            }
        }
        printf("\n");
    }
}

// Fun��o que imprime todos os elementos da diagonal principal e zero nas demais posi��es;
void imprime_diagonal_e_zeros(int num[TAMANHO][TAMANHO]){
    int contador1, contador2;
    printf("Imprime todos os elementos da diagonal principal e zero nas demais posi��es: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            if (contador1 == contador2){
                printf("%d\t", num[contador1][contador2]);
            }else{
                printf("0\t");
            }
        }
        printf("\n");
    }
}

// Fun��o que imprime todos os elementos acima da diagonal principal
void imprime_acima_da_diagonal(int num[TAMANHO][TAMANHO]){
    int contador1, contador2;
    printf("Imprime todos os elementos acima da diagonal principal: \n");
    for (contador1 = 0; contador1 < TAMANHO; contador1++){
        for (contador2 = 0; contador2 < TAMANHO; contador2++){
            if (contador2 > contador1){
                printf("%d\t", num[contador1][contador2]);
            }else{
                printf("\t");
            }
        }
        printf("\n");
    }
}