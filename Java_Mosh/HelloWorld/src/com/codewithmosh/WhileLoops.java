package com.codewithmosh;

import java.util.Scanner;

public class WhileLoops {

    public static void main(String[] args) {
        for (int i = 5; i > 0; i--)
            System.out.println("Hello World" + i);

        int i = 5;
        while (i > 0) {
            System.out.println("Hello World" + i);
            i--;
        }

        Scanner scanner = new Scanner(System.in);
        String input = "";
//      while (input != "quit")
        while (!input.equals("quit")) {
            System.out.println("Input:");
            input = scanner.next().toLowerCase();
            System.out.println(input);
        }
    }
}