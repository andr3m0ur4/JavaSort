public class Recursao {

    public static void main(String[] args) {
        System.out.println(decontador(-500));
    }

    static int decontador(int numero) {

        System.out.println(numero + " ");
        return decontador(numero - 1);

    }
}
