package com.codewithmosh;

public class SwitchStatements {

    public static void main(String[] args) {

//        String role = "admin";
//        if (role == "admin")
//            System.out.println("You're an admin");
//        else if (role == "moderator")
//            System.out.println("You're a moderator");
//        else
//            System.out.println("You're a guest");

        String role1 = "admin";

        switch (role1) {
            case "admin":
                System.out.println("You're an admin");
                break;

            case "moderator":
                System.out.println("You're a moderator");
                break;

            default:
                System.out.println("You're a guest");
        }

        int role2 = 1;

        switch (role2) {
            case 1:
                System.out.println("You're an admin");
                break;

            case 2:
                System.out.println("You're a moderator");
                break;

            default:
                System.out.println("You're a guest");
        }

    }
}
