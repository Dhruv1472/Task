public class Task6 {
    public static void main(String[] args) {
        int no = 6;
        for (int i = 0; i < no; i++) {
            for(int j=no;j>=i;j--){
                System.out.print(" ");
            }
            for (int k = 0; k <no; k++) {
                if (k == 0 || i == 0 || k == no - 1 || i == no - 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}