public class Task10 {
    public static void main(String[] args) {
        // int no = 5;
        for (int i = 0; i < 9; i++) {
            for (int j = 8; j > i; j--) {
                if (i % 2 == 0 || j < 8) {
                    System.out.print("  ");
                }
            }
            int count = 1;
            for (int k = 0; k <= i; k++) {
                if (i % 2 == 0) {
                    if ((i + k) % 2 == 0) {
                        System.out.print("  *  ");
                    } else {
                        System.out.print(" "+i/2+" ");
                        count += 1;
                    }
                }
            }
            System.out.println();
        }
    }
}