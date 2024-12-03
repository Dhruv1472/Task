import java.util.*;

public class Task7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int no = sc.nextInt();
        for (int i = 0; i <= no; i++) {
            for (int j = 0; j <= (no / 2) - 1; j++) {
                if ((i == 0 || j == 0 || i == no || j == (no / 2) - 1 || i == no / 2)
                        && !((i == 0 && j == 0) || (i == 0 && j == (no / 2) - 1)
                                || (i == no && j == (no / 2) - 1) || (i == no && j == 0) || (i == no / 2 && j == 0)
                                || (i == no / 2 && j == (no / 2) - 1))) {
                    System.out.print(" * ");
                } else {
                    System.out.print("   ");
                }
            }
            System.out.println();
        }
    }
}