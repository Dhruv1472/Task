import java.util.Scanner;

public class Task11{
    public static void main(String[] args) {
        System.out.println("enter no");
        Scanner sc=new Scanner((System.in));
        double inp=sc.nextDouble();
        String str=Double.toString(inp);
        String arr[]=str.split("");
        for(int i=arr.length-1;i>=0;i--){
            System.out.print(arr[i]);
        }

    }
}