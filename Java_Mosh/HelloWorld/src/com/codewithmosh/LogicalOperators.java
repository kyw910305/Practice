package com.codewithmosh;

public class LogicalOperators {

    public static void main(String[] args) {

        int temperature = 22;
        boolean isWarm = temperature > 20 && temperature < 30; // &&and
        System.out.println(isWarm);

        boolean hasHighIncome = true;
        boolean hasGoodCredit = true;
        boolean hasCriminalRecord = false;
        boolean isEligible = hasHighIncome || hasGoodCredit && !hasCriminalRecord; // ||or !negative
    }
}
