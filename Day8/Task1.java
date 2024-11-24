
import java.io.*;
import java.util.*;

public class Task1 {
    public static void main(String[] args) {
        String word="WELCOME TO MV CLOUDS";
        String arr[]=word.split("");
        for(int i=0;i<arr.length;i++){
            if(arr[i].equals(" ")){
                continue;
            }
            else{
             System.out.print(arr[i]);
            }
        }
    }
}