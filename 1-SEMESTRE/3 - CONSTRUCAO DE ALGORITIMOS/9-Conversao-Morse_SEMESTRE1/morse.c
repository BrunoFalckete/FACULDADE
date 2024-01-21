//INSTITUTO FEDERAL DO MATO GROSSO DO SUL
//ANALISE E DESENVOLVIMENTO DE SISTEMAS
//BRUNO MATHEUS FALCKETE FONSECA
//MATRICULA: 2021206476034-6
//12/10/2021
//BRUNO.FONSECA@ESTUDANTE.IFMS.EDU.BR

/*FAZER CONVERSAO DE MORSE PARA LETRA E LETRA PARA MORSE*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
  
  char morse[5], caractere; 
  int opcao;

  //usu�rio digita a opera��o que deseja realizar
  printf("Digite 1 para codificar e 2 para decodificar: ");
    scanf("%i", &opcao);

    //Transforma a letra ou n�mero em c�digo morse
    if (opcao == 1){
    printf("Informe o caractere a ser codificado: ");
    scanf("%s", &caractere);

      if (caractere == 'a' || caractere == 'A'){
        printf("C�digo: .-");
      }
      if (caractere == 'b' || caractere == 'B'){
        printf("C�digo: -...");
      }
      if (caractere == 'c' || caractere == 'C'){
        printf("C�digo: -.-.");
      }
      if (caractere == 'd' || caractere == 'D'){
        printf("C�digo: -..");
      }
      if (caractere == 'e' || caractere == 'E'){
        printf("C�digo: .");
      }
      if (caractere == 'f' || caractere == 'F'){
        printf("C�digo: ..-.");
      }
      if (caractere == 'g' || caractere == 'G'){
        printf("C�digo: --.");
      }
      if (caractere == 'h' || caractere == 'H'){
        printf("C�digo: ....");
      }
      if (caractere == 'i' || caractere == 'I'){
        printf("C�digo: ..");
      }
      if (caractere == 'j' || caractere == 'J'){
        printf("C�digo: .---");
      }
      if (caractere == 'k' || caractere == 'K'){
        printf("C�digo: -.-");
      }
      if (caractere == 'l' || caractere == 'L'){
        printf("C�digo: .-..");
      }
      if (caractere == 'm' || caractere == 'M'){
        printf("C�digo: --");
      }
      if (caractere == 'n' || caractere == 'N'){
        printf("C�digo: -.");
      }
      if (caractere == 'o' || caractere == 'O'){
        printf("C�digo: ---");
      }
      if (caractere == 'p' || caractere == 'P'){
        printf("C�digo: .--.");
      }
      if (caractere == 'q' || caractere == 'Q'){
        printf("C�digo: --.-");
      }
      if (caractere == 'r' || caractere == 'R'){
        printf("C�digo: .-.");
      }
      if (caractere == 's' || caractere == 'S'){
        printf("C�digo: ...");
      }
      if (caractere == 't' || caractere == 'T'){
        printf("C�digo: -");
      }
      if (caractere == 'u' || caractere == 'U'){
        printf("C�digo: ..-");
      }
      if (caractere == 'v' || caractere == 'V'){
        printf("C�digo: ...-");
      }
      if (caractere == 'w' || caractere == 'W'){
        printf("C�digo: .--");
      }
      if (caractere == 'x' || caractere == 'X'){
        printf("C�digo: -..-");
      }
      if (caractere == 'y' || caractere == 'Y'){
        printf("C�digo: -.--");
      }
      if (caractere == 'z' || caractere == 'Z'){
        printf("C�digo: --..");
      } 
      if (caractere == '0'){
        printf("C�digo: -----");
      } 
      if (caractere == '1'){
        printf("C�digo: .----");
      } 
      if (caractere == '2'){
        printf("C�digo: ..---");
      } 
      if (caractere == '3'){
        printf("C�digo: ...--");
      } 
      if (caractere == '4'){
        printf("C�digo: ....-");
      } 
      if (caractere == '5'){
        printf("C�digo: .....");
      } 
      if (caractere == '6'){
        printf("C�digo: -....");
      } 
      if (caractere == '7'){
        printf("C�digo: --...");
      } 
      if (caractere == '8'){
        printf("C�digo: ---..");
      } 
      if (caractere == '9'){
        printf("C�digo: ----.");
      } 

    }
    
    //Transformar o C�digo Morse em letra ou n�mero
    if (opcao == 2){
    printf("Informe o c�digo a ser decodificado: ");
    scanf("%s", morse);
    
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: A");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '.' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: B");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '-' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: C");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '.' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: D");
      }
      if (morse[0] == '.' && morse[1] == 0 && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: E");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '-' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: F");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '.' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: G");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: H");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: I");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '-' && morse[3] == '-' && morse[4] == 0){ 
        printf("Letra: J");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '-' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: K");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '.' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: L");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: M");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: N");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '-' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: O");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '-' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: P");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '.' && morse[3] == '-' && morse[4] == 0){ 
        printf("Letra: Q");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '.' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: R");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: S");
      }
      if (morse[0] == '-' && morse[1] == 0 && morse[2] == 0 && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: T");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '-' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: U");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == '-' && morse[4] == 0){ 
        printf("Letra: V");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '-' && morse[3] == 0 && morse[4] == 0){ 
        printf("Letra: W");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '.' && morse[3] == '-' && morse[4] == 0){ 
        printf("Letra: X");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '-' && morse[3] == '-' && morse[4] == 0){ 
        printf("Letra: Y");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '.' && morse[3] == '.' && morse[4] == 0){ 
        printf("Letra: Z");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '-' && morse[3] == '-' && morse[4] == '-'){ 
        printf("N�mero: 0");
      }
      if (morse[0] == '.' && morse[1] == '-' && morse[2] == '-' && morse[3] == '-' && morse[4] == '-'){ 
        printf("N�mero: 1");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '-' && morse[3] == '-' && morse[4] == '-'){ 
        printf("N�mero: 2");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == '-' && morse[4] == '-'){ 
        printf("N�mero: 3");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == '.' && morse[4] == '-'){ 
        printf("N�mero: 4");
      }
      if (morse[0] == '.' && morse[1] == '.' && morse[2] == '.' && morse[3] == '.' && morse[4] == '.'){ 
        printf("N�mero: 5");
      }
      if (morse[0] == '-' && morse[1] == '.' && morse[2] == '.' && morse[3] == '.' && morse[4] == '.'){ 
        printf("N�mero: 6");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '.' && morse[3] == '.' && morse[4] == '.'){ 
        printf("N�mero: 7");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '-' && morse[3] == '.' && morse[4] == '.'){ 
        printf("N�mero: 8");
      }
      if (morse[0] == '-' && morse[1] == '-' && morse[2] == '-' && morse[3] == '-' && morse[4] == '.'){ 
        printf("N�mero: 9");
      }
    }
}
