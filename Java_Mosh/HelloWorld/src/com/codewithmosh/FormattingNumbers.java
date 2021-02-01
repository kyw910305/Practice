package com.codewithmosh;

import java.text.NumberFormat;

public class FormattingNumbers {

    public static void main(String[] args) {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        String result1 = currency.format(1234567.891);

        NumberFormat percent = NumberFormat.getPercentInstance();
        String result2 = percent.format(0.1);

        String result3 = NumberFormat.getCurrencyInstance().format(1234567.891);

        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);
        System.out.println("result3 = " + result3);
    }
}
