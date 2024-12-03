import java.util.*;
public class Task4 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int no=sc.nextInt();
        for (int i = 0; i < no; i++) {
            for (int j = 0; j <= i; j++) {
                if(j == 0 || i==no-1 || i==j){
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}