import java.util.*;

public class Task8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int no = sc.nextInt();
        for (int i = 0; i < no; i++) {
            for (int j = no - 2; j >= i; j--) {
                System.out.print(" ");
            }
            for (int k = 0; k <= i; k++) {
                if (k == 0 || i == no - 1 || i == k) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}