
import java.io.*;
import java.util.Scanner;

public class Task14 {
	public static void main(String[] args) {
		System.out.println("Enter String");
		Scanner sc = new Scanner(System.in);
		String text = sc.nextLine();
		int s = 4;
		System.out.println("Encryption  : " + text);
		System.out.println("decryption: " + encrypt(text, s));

	}

	public static StringBuffer encrypt(String text, int s) {
		StringBuffer result = new StringBuffer();

		for (int i = 0; i < text.length(); i++) {
			if (Character.isUpperCase(text.charAt(i))) {
				char ch = (char) (((int) text.charAt(i) +
						s - 65) % 26 + 65);
				result.append(ch);
			} else {
				char ch = (char) (((int) text.charAt(i) +
						s - 97) % 26 + 97);
				result.append(ch);
			}
		}
		return result;
	}
}