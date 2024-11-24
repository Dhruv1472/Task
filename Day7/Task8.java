import java.util.*;

public class Task8 {
    public static void main(String[] args) {
        int[] arr = { 1, 3, 5, 7 };
        boolean flag = true;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        System.err.println(flag);
    }
}