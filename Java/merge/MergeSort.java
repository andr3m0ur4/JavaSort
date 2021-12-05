/*
* Ordena_v4.java
* 
*            I           Q           T
*            0  1  2  3  4  5  6  7  8
* pontos = { 9, 4, 7, 2, 5, 1, 2, 6 };
* 
*             esquerda           direita
* pontos = { 9, 4, 7, 2,       5, 1, 2, 6 };
* 
*            I     Q     T
* pontos = { 9, 4, 7, 2,       5, 1, 2, 6 };
* 
*          esquerda    direita
* pontos = { 9, 4,      7, 2,       
* 
*            I  Q  T
* pontos = { 9, 4,      7, 2,       
* 
*        esquerda   direita
* pontos = { 9,       4, 
* 
*          intercala
* pontos = { 4, 9,      7, 2, 
*  
*                       I  Q  T
* pontos = { 4, 9,      7, 2, 
*  
*                     intercala
* pontos = { 4, 9,      2, 7,   
* 
*            I     Q     T
* pontos = { 4, 9, 2, 7,  
* 
*             intercala
* pontos = { 2, 4, 7, 9,       5, 1, 2, 6 };                    
* 
*/

package merge;

import java.util.Arrays;

public class MergeSort {

  //
    public static void ordenar(int[] vetor, int inicio, int termino) { // n log(n)
  
      //
      // Caso Recursivo
      //	
        if ( termino - inicio > 1 ) {
          
            int quebra = ( inicio + termino ) / 2;
            
            //LOG
            // System.out.println("Inicio: " + inicio + "\nQuebra: " + quebra + "\nTermino: " + termino );
            
            //ordena o lado da esquerda
            ordenar(vetor, inicio, quebra);
            
            //ordena o lado da direita
            ordenar(vetor, quebra, termino);
            
            // intercalacao ordena dos lados da esquerda e da direita
            intercalacao ( vetor, inicio, quebra, termino  ); 
        }
      
      //
      // Caso Base
      //
        // imprime ( vetor );
    }
  
    //                              pontos[]          1          3            5
    private static void intercalacao(int original[], int inicio, int quebra, int termino) { //2n
      
        int tamanhoEsquerda = quebra;   // 3
        int tamanhoDireita  = termino;  // 5 
        
        //         4                5        1
        int tamanhoResultante = termino - inicio;
        
        //                                             4
        int resultante[] = new int[ tamanhoResultante ];
        
        int posicaoEsquerda   = inicio, // 1
            posicaoDireita    = quebra, // 3
            posicaoResultante = 0;      // 0
        
        // intecalacao ordenada
        while ( posicaoEsquerda < tamanhoEsquerda && posicaoDireita < tamanhoDireita ) {
            
            //LOG
            // System.out.print("E[" + posicaoEsquerda + "]: " + original[posicaoEsquerda ] +
            //                 " < " +
            //                 "D[" + posicaoDireita  + "]: " + original[posicaoDireita] + 
            //                 " ===> ");
            
            int professorEsquerda = original[posicaoEsquerda];
            int professorDireita  = original[posicaoDireita];
            
            if ( professorEsquerda < professorDireita ) {
            
                //LOG
                // System.out.println("R{" + posicaoResultante + "}: " + "E[" + posicaoEsquerda + "]: " + original[posicaoEsquerda] );
                
                resultante[posicaoResultante++] = original[posicaoEsquerda++];
                
            } else {
                
                //LOG
                // System.out.println("R{" + posicaoResultante + "}: " + "D[" + posicaoDireita  + "]: " + original[posicaoDireita] );
                                                    
                resultante[posicaoResultante++] = original[posicaoDireita++];
            }
        }
            
        // concatenar o que sobrou
        
        while ( posicaoEsquerda < tamanhoEsquerda ) {

            //LOG
            // System.out.println("R(" + posicaoResultante + "): " + "E[" + posicaoEsquerda + "]: " + original[posicaoEsquerda] );			

            resultante[posicaoResultante++] = original[posicaoEsquerda++];
        }		
        
        while ( posicaoDireita < tamanhoDireita ) {

            //LOG
            // System.out.println("R(" + posicaoResultante + "): " + "D[" + posicaoDireita  + "]: " + original[posicaoDireita] );
                                                
            resultante[posicaoResultante++] = original[posicaoDireita++];
        }
        
        // Finalizacao: copiando de volta os valores ordenados para o vetor original
        for ( int atual = 0 ; atual < resultante.length ; atual++ ) {
        
            original[atual + inicio] = resultante[atual];
        }
        
        //LOG
        // System.out.println();
    }
  
  
  //
    static void imprime (int vetor[]) {
        
        System.out.println( vetor.length + ": " );

        System.out.println( Arrays.toString ( vetor ) );
    }
}
