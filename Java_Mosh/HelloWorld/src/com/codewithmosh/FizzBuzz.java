package com.codewithmosh;

import java.util.Scanner;

public class FizzBuzz {

    public static void main(String[] args) {
        /*
        Number: 5 if this number is divisible by 5
        Fizz
        Number: 3 if this number is divisible by 3
        Buzz
        Number: 15 if this number is divisible by both 5 or 3
        FizzBuzz
        Number:2 if this number isn't divisible by 5 or 3
        2 print same number
         */

        Scanner scanner = new Scanner(System.in);
        System.out.print("Number: ");
        int number = scanner.nextInt();

        if (number % 5 == 0 && number % 3 == 0)
            System.out.println("FizzBuzz");
        else if(number % 5 == 0)
            System.out.println("Fizz");
        else if(number % 3 == 0)
            System.out.println("Buzz");
        else
            System.out.println(number);

//        if (number % 5 == 0) {
//            if (number % 3 == 0)
//                System.out.println("FizzBuzz");
//            else
//                System.out.println("Fizz");
//        }
//        else if(number % 3 == 0)
//            System.out.println("Buzz");
//        else
//            System.out.println(number);
    }
}
