public class Task15 {
    public static void main(String[] args) {
        int no = 1634;
        int temp = no;
        int temp2 = no;
        int count = 0;
        while (temp > 0) {
            count += 1;
            temp = (int) Math.floor(temp / 10);
        }
        int sum = 0;
        int rev = 0;
        while (temp2 > 0) {
            rev = temp2 % 10;
            sum = (int) (sum + Math.pow(rev, count));
            temp2 = (int) Math.floor(temp2 / 10);
        }
        if(no == sum){
            System.out.println("This is armstrong number");
        }
        else{
            System.out.println("This is not an armstrong number");
        }
    }
}