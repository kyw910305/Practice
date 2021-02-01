package com.codewithmosh;

public class EscapeSequences {

    public static void main(String[] args) {

        String message1 = "Hello \"Youngwoong\"";
        String message2 = "C:\\Windows\\..";
        String message3 = "C:\nWindows\\..";
        String message4 = "C:\tWindows\\...";
        System.out.println(message1);
        System.out.println(message2);
        System.out.println(message3);
        System.out.println(message4);
    }
}
