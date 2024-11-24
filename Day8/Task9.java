public class Task9 {
    public static void main(String[] args) {
        int no=9;
        for (int i = 0; i < no; i++) {
            for (int j = 0; j < no; j++) {
                if (j == 0 || j == 8 || i == j || i + j == no-1) {
                    System.out.print(" * ");
                } else {
                    System.out.print("   ");
                }
            }
            System.out.println();
        }
    }
}