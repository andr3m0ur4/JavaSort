 /*
 * BubbleSort.java
 * 
 */

package bubble;

import java.util.Arrays;

public class BubbleSort {
	
	public static int contador = 0;
	
	//                                       0            5
	public static void ordenar(int[] vetor, int inicio, int termino) {
		for (int atual = inicio; atual < termino - 1; atual++) {
			
			//LOG
			// System.out.println("Atual: " + atual );
			
			//                                                 |||||||
			for (int posicao = inicio; posicao < termino - 1 - atual; posicao++) {
				//                                             |||||||
				
				contador++;
				
				//LOG
				// System.out.println("Teste >> [" + posicao + "]: " + vetor[posicao] + " > [" + (posicao + 1) + "]: " + vetor[posicao + 1]);
				
				if (vetor[posicao] > vetor[posicao + 1]) {
					
					trocar(vetor, posicao, posicao + 1);
				}
			}
			// System.out.println("------\n");
		}
	}
	
	//
	private static void trocar(int[] vetor, int de, int para) {
		
		int  posicaoDe  = vetor[de];
		int posicaoPara = vetor[para];
		
		vetor[de] = posicaoPara;
		vetor[para] =  posicaoDe;
		
		// System.out.print("\n>");
		// imprime ( vetor );
	}
	
	static void imprimir(int[]array) {
		System.out.println(Arrays.toString(array));
	}
}
