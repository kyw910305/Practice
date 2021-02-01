package com.codewithmosh;

import java.util.Scanner;

public class DoWhileLoops {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = "";
//      while (input != "quit")
        while (!input.equals("quit")) {
            System.out.println("Input:");
            input = scanner.next().toLowerCase();
            System.out.println(input);
        }

        do {
            System.out.println("Input:");
            input = scanner.next().toLowerCase();
            System.out.println(input);
        } while (!input.equals("quit"));
    }
}
