import java.util.*;

public class Task13{
    static int factorial(int n) {
        if (n == 1 || n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }

    }
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter N ");
        int n=sc.nextInt();
        System.out.println("Enter r ");
        int r=sc.nextInt();
        int permutation=factorial(n)/factorial(n-r);
        int combination=factorial(n)/(factorial(r)*factorial(n-r));
        System.out.println("permutation is : "+permutation);
        System.out.println("combination is : "+combination);
    }
}