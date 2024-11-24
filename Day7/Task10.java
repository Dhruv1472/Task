import java.util.Scanner;

public class Task10 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter You word");
        String word=sc.nextLine();
        System.out.println("enter no of word");
        int no=sc.nextInt();
        String arr[] = word.split(" ");
        System.out.println(arr[no-1]);
    }
}