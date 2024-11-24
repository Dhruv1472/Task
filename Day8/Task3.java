public class Task3 {
    public static void main(String[] args) {
        int[] arr = { 98, 32, 72, 94, 75, 73, 92, 36, 28, 34 };
        int high = 0, secondhigh = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > high) {
                secondhigh = high;
                high = arr[i];
            } else if (arr[i] > secondhigh && arr[i] < high) {
                secondhigh = arr[i];
            }
        }
        System.out.println(secondhigh);
    }
}