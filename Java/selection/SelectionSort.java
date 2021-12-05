/*
* OrdenaCargaHorariaPrimitivo.java
* 
*/

package selection;

import java.util.Arrays;

public class SelectionSort {
   
   //
   public static void ordenar(int[] vetor, int inicio, int termino) {
       
       for ( int atual = inicio ; atual < termino - 1 ; atual++ ) {
           
           int menor = buscaMenor ( vetor, atual , termino );
           
           troca ( vetor, menor, atual );
       }
   }
   
   //
   private static void troca(int[] vetor, int de, int para) {
       
       int  posicaoDe  =  vetor[de];
       int posicaoPara = vetor[para];
       
        vetor[de]  = posicaoPara;
       vetor[para] =  posicaoDe;
       
    //    System.out.print(">");
    //    imprime ( vetor );
       
   }
   
   //
   private static int buscaMenor(int[] vetor, int inicio , int termino) {
       
       int menor = inicio;
       
       for ( int posicao = inicio + 1 ; posicao < termino ; posicao++ ) {
           
           if ( vetor[posicao] < vetor[menor] ) {
               
               menor = posicao;
           }
       }
       
       return menor;
   }
   
   //
   static void imprime ( int[] vetor ) {
       System.out.println( Arrays.toString ( vetor )  );
   }
}
