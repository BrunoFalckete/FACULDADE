<!-- 
    1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.
-->
<?php
    $area = 0;
    $comprimento = 30.95;
    $largura = 12.50;

    $area = $comprimento * $largura;

    echo "A área do terreno é: ".$area;
?>

<!-- 
    2. Faça um algoritmo qe leia um número e informe se este número é positivo ou negativo.
 -->
 <?php
    $numero = -1;

    if($numero >= 0){
        echo "O número ".$numero." é positivo";
    }else{
        echo "O número ".$numero." é negativo";
    }
?>

<!-- 
    3. Faça um algoritmo que escreva o resultado da soma dos números de 1 a 100.
 -->
 <?php
    $resultado = 0;
    for($i = 1; $i <= 100; $i++){
        $resultado += $i;
    }
    echo "Resultado: " . $resultado;
?>