/*
* InsertionSortPrimitivo_v2.java
* 
*/

package insertion;

import java.util.Arrays;

public class InsertionSort {
   
   //
   public static void ordenar(int[] vetor, int inicio, int termino) {
       
       int posicao = 0;
       
       for ( int atual = inicio + 1 ; atual < termino ; atual++ ) {
           
           posicao = atual;
           // LOG
        //    System.out.println("\nPosicao atual: " + posicao);
           
           // LOG
        //    System.out.println("Testando: " + vetor[posicao] + " < " + vetor[posicao - 1]);
           while ( posicao > 0 && vetor[posicao] < vetor[posicao - 1] ) {
               // LOG
            //    System.out.println("Elemento na posicao: " + vetor[posicao]);
            //    System.out.println("Elemento na posicao anterior: " + vetor[posicao - 1]);
               
               trocar( vetor, posicao, posicao - 1 );
               
               posicao--;
               // LOG
            //    System.out.println("\nPosicao atual: " + posicao);
           }
       }
   }
   
   //
   private static void trocar ( int[] vetor, int de, int para ) {
       
       int  posicaoDe  = vetor [  de  ];
       int posicaoPara = vetor [ para ];
       
       // LOG
    //    System.out.println("Trocando: " + posicaoDe + " com " + posicaoPara );
       
       vetor [  de  ] = posicaoPara;
       vetor [ para ] =  posicaoDe;
       
       // LOG
    //    System.out.print(">");
    //    imprimir(vetor);
   }
   
   //
    static void imprimir ( int[] vetor ) {
       
       System.out.println ( Arrays.toString ( vetor ) );
   }
}
