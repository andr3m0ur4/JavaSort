/*
* QuickSort.java
* 
*/

package quick;

public class QuickSort {
  
    static int contadorQS = 0;
    static int contadorP = 0;
  
  //
    public static void ordenar(int[] array, int inicio, int termino) {
        
        contadorQS++;
        
        //// CB
        
        //// CR
        if ( termino - inicio > 1 ) {
                
            int posicaoPivo = particionar(array, inicio, termino);
            
            // ordenar o lado da esquerda
            ordenar(array, inicio, posicaoPivo);
            
            // ordenar o lado da direita
            ordenar(array, posicaoPivo + 1, termino);
        }
    }
  
  //
    public static int particionar(int[] array, int inicio, int termino) {
        
        contadorP++;
        
        int menoresEncontrados = inicio;
        int posicaoDoPivo = termino - 1;
        
        int pivo = array[posicaoDoPivo];
        
        for (int atual = inicio; atual < posicaoDoPivo; atual++) {
            
            int nota = array[atual];
            
            if (nota < pivo) {
            
                trocar(array, atual, menoresEncontrados);
                
                menoresEncontrados++;
            }
        }
        
        trocar(array, posicaoDoPivo, menoresEncontrados);
        
        return menoresEncontrados;
    }
  
  //
    public static void trocar(int[] array, int origem, int destino) {
        
        int notaOrigem  = array[origem];
        int notaDestino = array[destino];
        
        array[origem]  = notaDestino;
        array[destino] = notaOrigem;
    }
  
  //
    public static void imprimir(int[] array) {
        
        for (int nota : array) {
            System.out.println(nota);
        }
        
        System.out.println();
    }
}
