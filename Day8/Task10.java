import java.util.*;

public class Task10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int no = sc.nextInt();

        for (int i = 0; i < no; i++) {
            for (int j = no - 1; j > i; j--) {
                if (i % 2 == 0 || j < no - 1) {
                    System.out.print("  ");
                }
            }
            int count = 1;
            for (int k = 0; k <= i; k++) {
                if (i % 2 == 0) {
                    if ((i + k) % 2 == 0) {
                        System.out.print("  *  ");
                    } else {
                        System.out.print(" " + i / 2 + " ");
                        count += 1;
                    }
                }
            }
            System.out.println();
        }
    }
}