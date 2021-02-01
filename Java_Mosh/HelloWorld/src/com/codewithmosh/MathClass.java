package com.codewithmosh;

public class MathClass {

    public static void main(String[] args) {
        int result1 = Math.round(1.1F);
        int result2 = (int)Math.ceil(1.1F);
        int result3 = (int)Math.floor(1.1F);
        int result4 = Math.max(1, 2);
        int result5 = Math.min(1, 2);
        double result6 = Math.random();
        double result7 = Math.random() * 100;
        double result8 = Math.round(Math.random() * 100);
        int result9 = (int)Math.round(Math.random() * 100);
        int result10 = (int)Math.random() * 100;
        int result11 = (int)(Math.random() * 100);

        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);
        System.out.println("result3 = " + result3);
        System.out.println("result4 = " + result4);
        System.out.println("result5 = " + result5);
        System.out.println("result6 = " + result6);
        System.out.println("result7 = " + result7);
        System.out.println("result8 = " + result8);
        System.out.println("result9 = " + result9);
        System.out.println("result10 = " + result10);
        System.out.println("result11 = " + result11);
    }
}
