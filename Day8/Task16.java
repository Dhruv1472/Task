import java.util.*;
public class Task16 {
 
    public static int countCombinations(int numDice, int targetSum) { 
        int totalCombinations = 0;
        if (numDice == 0 && targetSum == 0) {
            return 1;
        } 
        if (numDice == 0 || targetSum <= 0) {
            return 0;
        }
        for (int i = 1; i <= 6; i++) {
            totalCombinations += countCombinations(numDice - 1, targetSum - i);
        }
        return totalCombinations;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter  No of Dice");
        int no=sc.nextInt();
        System.out.println("Enter  Sum you want");
        int sum=sc.nextInt();
        System.out.println("Combinations for "+no+" dice and target sum "+sum+": " + countCombinations(no, sum)); 
    }
}