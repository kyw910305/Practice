package com.codewithmosh;

public class ArithmeticExpressions {

    public static void main(String[] args) {
        int resultPlus = 10 + 3;
        int resultMinus = 10 - 3;
        int resultMultiply = 10 * 3;
        int resultDivision = 10 / 3;
        double resultDivision2 = (double)10 / (double)3;
        int x = 1;
        int y = x++;
        int a = 1;
        int b = ++a;
        int c = 1;
        c += 2;
//      c = c + 2;

        System.out.println(resultPlus);
        System.out.println(resultMinus);
        System.out.println(resultMultiply);
        System.out.println(resultDivision);
        System.out.println(resultDivision2);
        System.out.println(x);
        System.out.println(y);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

    }
}
