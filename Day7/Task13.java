public class Task13 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello ");
        System.out.println(sb);
        sb.delete(0, sb.length());
        System.out.println(sb);
    }
}