package org.test.com;

import java.util.Random;
import java.util.Scanner;

public class game {
    public static void main(String[] args) {
        System.out.println("Welcome to the wonderland!");
        System.out.println("May I have your name!");
        Scanner scanner = new Scanner(System.in);
        String name =  scanner.next();

        System.out.println("Welcome to the game, "+name);
        System.out.println("Shall we start?");
        System.out.println("\t1 Yes");
        System.out.println("\t2 No");

        int ans = scanner.nextInt();

        while(ans != 1) {
            System.out.println("Shall we start?");
            System.out.println("\t1 Yes");
            System.out.println("\t2 No");

            ans = scanner.nextInt();
        }

        Random random = new Random();
        int x = random.nextInt(20) +1;
        System.out.println("I thought of a number from 1 to 20. Guess it!");
        int usans = scanner.nextInt();

        int times = 0;
        boolean won = false;
        boolean finish = false;

        while (!finish) {
            times++;

            if(times < 5) {
                if(usans == x) {
                    won = true;
                    finish = true;
                } else if(usans > x) {
                    System.out.println("Lower~~");
                    usans = scanner.nextInt();

                } else if(usans < x) {
                    System.out.println("Higher!");
                    usans = scanner.nextInt();
                }
            }else {
                finish = true;
            }
        }

        if (won) {
            System.out.println("That's right! Ypu guessed the number on the "+times+" time");
        }else {
            System.out.println("Game over!");
            System.out.println("The answer was "+x+" but you never guessed it!");
        }
    }
}
