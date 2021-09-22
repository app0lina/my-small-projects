package org.test.com;

import java.util.Scanner;

public class mainclass {
    public static void main(String[] args) {
        eyes leye = new eyes("Left eye", "kinda red", "blue", "left");
        eyes reye = new eyes("Left eye", "kinda red", "blue", "left");
        

        eyes[] eye = {leye, reye};
        organ[ ] orgs = {leye, reye};

        class heart extends organ {
            int heartrate;

            public heart(String name, String medcond, int heartrate) {
                super(name, medcond);
                this.heartrate = heartrate;
            }

            public void changerate(int heartrate) {
                this.heartrate = heartrate;
                System.out.println("Heart rate changed to "+heartrate);
            }
        }

        heart h = new heart("Heart", "Ok", 89);



        Scanner scanner = new Scanner();
        int orgnum = scanner.nextInt();
        switch (orgnum) {
            case 1:
                System.out.println(organ[1]);
        }

    }
}
