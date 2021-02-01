
public class AuthApp {

	public static void main(String[] args) {

		System.out.println(args[0]);
		
		String id = "Dovenwolf";
		String inputId = args[0];
		
		String password = "1111";
		String inputPassword = args[1];
		
		System.out.println("Hi");
		
//		if(inputId == id) {
//		if(inputId.equals(id)) {
//			if(inputPassword.equals(password)) {
//			} else {
//				System.out.println("Master!");
//			} else {
//				System.out.println("Wrong password");
//			}
//		} else {
//			System.out.println("Who are you?");
//		}
		
		if(inputId.equals(id) && inputPassword.equals(password)) {
			System.out.println("Master!");
		} else {
			System.out.println("Who are you?");
		}
		
		
	}

}
