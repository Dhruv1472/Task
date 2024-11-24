public class Task7 {
    public static void main(String[] args) {
        for (int i = 0; i <= 8; i++) {
            for (int j = 0; j <= 3; j++) {
                if ((i==0 || j==0 || i==8 || j==3 || i==4) && !((i==0 && j==0) || (i==0 && j==3) || (i==8 && j==3)|| (i==8 && j==0)|| (i==4 && j==0)|| (i==4 && j==3))) {
                    System.out.print(" * ");
                } else {
                    System.out.print("   ");
                }
            }
            System.out.println();
        }
    }
}