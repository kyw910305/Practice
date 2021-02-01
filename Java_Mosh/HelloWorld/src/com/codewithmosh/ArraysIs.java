package com.codewithmosh;

import java.util.Arrays;

public class ArraysIs {

    public static void main(String[] args) {
        int[] numbers = new int[5];
        numbers[0] = 1;
        numbers[1] = 2;

        int[] numbers2 = {2, 3, 5, 1, 4};

        System.out.println(Arrays.toString(numbers));

        System.out.println(Arrays.toString(numbers2));
        System.out.println(numbers2.length);

        Arrays.sort(numbers2);
        System.out.println(Arrays.toString(numbers2));



    }
}
