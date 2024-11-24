import java.util.*;

public class Task2 {
    public static void main(String[] args) {
        List<Character> list = Arrays.asList('z', 'a', 'c', 'b', 'y', 'd');
        System.out.println("Original List: " + list);
        int n = list.size();
        char temp;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (list.get(j) > list.get(j + 1)) {
                    temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
        System.out.println("Sorted List: " + list);
    }
}