package com.codewithmosh;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class MortgageCalculator {

    public static void main(String[] args) {
        final byte monthOfYears = 12;
        final byte percent = 100;

        int principal = 0;
        float monthlyInterestRate = 0;
        int numberOfPayments =0;

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Principal ($1K - $1M): ");
            principal = scanner.nextInt();
            if (principal >= 1_000 && principal <= 10_000_000)
                break;
            System.out.println("Enter a number between 1,000 and 10,000,000.");

        }

        while(true) {
            System.out.print("Annual Interest Rate(%): ");
            float annualInterestRate = scanner.nextFloat();
            if (annualInterestRate <= 30 && annualInterestRate > 0) {
                monthlyInterestRate = annualInterestRate / percent / monthOfYears;
                break;
            }
            System.out.println("Enter a value greater than 0 and less than or equal to 30.");
        }

        while (true) {
            System.out.print("Period (Years): ");
            byte years = scanner.nextByte();
            if (years <= 30 && years >= 1) {
                numberOfPayments = years * monthOfYears;
                break;
            }
            System.out.println("Enter a value between 1 and 30.");
        }

        double mortgage = principal
                * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)
                / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        System.out.print("Mortgage: " + NumberFormat.getCurrencyInstance(Locale.US).format(mortgage));


    }
}
