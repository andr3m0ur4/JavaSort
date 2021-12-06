import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.Random;

import bubble.BubbleSort;
import insertion.InsertionSort;
import merge.MergeSort;
import quick.QuickSort;
import selection.SelectionSort;

public class Main {

    public static void main(String[] args) {

        int[] array = generateArray(10000000, 1000);

        // sort(array);
         asort(array);

		imprimir(array);
		
        // Início Estimativa
        Instant start = Instant.now();

		// BubbleSort.ordenar(array, 0, array.length);
        // SelectionSort.ordenar(array, 0, array.length);
        // InsertionSort.ordenar(array, 0, array.length);
        //Arrays.sort(array, 0, array.length);
        MergeSort.ordenar(array, 0, array.length);
        // QuickSort.ordenar(array, 0, array.length);

        Instant end = Instant.now();
        long timeElapsed = Duration.between(start, end).toMillis();
        long timeElapsedNanos = Duration.between(start, end).toNanos();
        // Fim Estimativa
		
		imprimir(array);
        System.out.println("\nTempo decorrido: " + timeElapsed + " milésimos de segundos.");
        System.out.println("Tempo decorrido: " + timeElapsedNanos + " nanos de segundos.");
    }

    private static int[] generateArray(int length, int maxNumber) {
        Random random = new Random(length);
        int[] array = new int[length];
		
        for (int i = 0; i < length; i++) {
            array[i] = random.nextInt(maxNumber);
        }

        return array;
    }

    private static void imprimir(int[] array) {
		System.out.println(Arrays.toString(array));
	}

    private static void sort(int[] array) {
        Arrays.sort(array, 0, array.length);
    }

    private static void asort(int[] array) {
        sort(array);

        int[] newArray = new int[array.length];

        for (int i = 0, j = array.length; i < newArray.length; i++) {
            newArray[i] = array[--j];
        }

        for (int i = 0; i < array.length; i++) {
            array[i] = newArray[i];
        }
    }
}
