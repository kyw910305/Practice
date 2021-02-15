package com.Java.Run;

import com.Java.Class.Solutions;

import java.util.Scanner;

public class Run {

    public static void theLines() {
        System.out.println("===========================================");
    }

    public static void main(String[] args) {

        Solutions sol = new Solutions();
        Scanner scanner = new Scanner(System.in);


        while (true) {
            System.out.print("Input solution No. which you want execute.: ");
            int inputValue = scanner.nextInt();
            theLines();

            switch (inputValue) {
                case 0 -> sol.solution0();
                case 1 -> sol.solution1();
                case 2 -> sol.solution2();
            }

            theLines();
            System.out.print("Do you want execute another solutions? (Y/N) :");
            char askExecute = scanner.next().toUpperCase().charAt(0);

            if (askExecute == 'N')
                break;
        }
    }
}
