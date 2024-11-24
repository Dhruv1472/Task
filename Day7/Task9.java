import java.util.*;
import java.io.*;

public class Task9 {
    public static void main(String[] args) {
        System.err.println("Enter Word you find");
        Scanner sc = new Scanner(System.in);
        String word = sc.nextLine();
        String data = "this is day7 task9";
        String arr[] = data.split(" ");
        boolean flag=false;
        for (int i = 0; i < arr.length; i++) { 
            if (arr[i].equals(word)) {
                flag=true;
            }             
        }
        if(flag == true){
            System.out.println("String contains word");
        }
        else{
            System.out.println("Does not contain word");
        }

    }
}