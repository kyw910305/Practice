package com.codewithmosh;

public class SimplifyingIfStatements {

    public static void main(String[] args) {

//        int income = 120_000;
//        if (income > 100_000) {
//            boolean hasHighIncome = true;
//        }
//        System.out.println(hasHighIncome);
//        Error

//        int income = 120_000;
//        boolean hasHighIncome;
//        if (income > 100_000)
//            hasHighIncome = true;
//        else
//            hasHighIncome = false;
//        System.out.println(hasHighIncome);
//        Not good

//        int income = 120_000;
//        boolean hasHighIncome = false;
//        if (income > 100_000)
//            hasHighIncome = true;

        int income = 120_000;
        boolean hasHighIncome = (income > 100_000);



        System.out.println(hasHighIncome);

    }
}
