public class Task14{
public static void main(String[]args){
        String str=null;
        try{
            System.out.println(str.length());
        }
        catch(NullPointerException err){
            System.out.println("Error :"+err);
        }
    }
}