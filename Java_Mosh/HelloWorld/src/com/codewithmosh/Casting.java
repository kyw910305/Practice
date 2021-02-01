package com.codewithmosh;

public class Casting {

    public static void main(String[] args) {
        // Implicit casting
        // byte > short > int > long > float > double
        short x = 1;
        int y = x + 2;

        double a = 1.1;
        double b = a + 2; // 2.0

        double c = 1.1;
        int d = (int)c + 2;

        String e = "1";
        int f = Integer.parseInt(e) + 2;

        String g = "1.1";
        double h = Double.parseDouble(g) + 2;

        System.out.println("y = " + y);
        System.out.println("b = " + b);
        System.out.println("d = " + d);
        System.out.println("f = " + f);
        System.out.println("h = " + h);
    }
}
