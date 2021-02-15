package com.Java.Class;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Solutions {

    public void solution0() {
        System.out.println("Hello World");

    }

/*
10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
1000미만의 자연수에서 3,5의 배수의 총합을 구하라.
 */
    public void solution1() {
        int multipleOf3and5 = 0;

        for (int i = 1; i < 1000; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                multipleOf3and5 += i;
            }
        }
        System.out.println("1000미만의 자연수의 3,5의 배수의 총합: " + multipleOf3and5);
    }
/* 소스코드내에 사용된 탭(Tab) 문자를 공백 4개(4 space)로 바꾸어 주는 프로그램을 작성하시오. */
    public void solution2 () {


    }

}
