
public class LoopArray {

	public static void main(String[] args) {

		/*
		 *  <li>Dovenwolf</li>
		 *	<li>Guru</li>
		 * 	<li>Hun</li>
		 * 
		 */
		
		String[] users = new String[3];
		users[0] = "Dovenwolf";
		users[1] = "Guru";
		users[2] = "Hun";
		
		for(int i=0; i<users.length; i++) {
			System.out.println(users[i]+",");
		}
		
	}

}
