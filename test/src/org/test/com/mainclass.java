package org.test.com;

import java.util.Scanner;

public class mainclass {
    public static void main(String[] args) {
        Patient patient = new Patient("Lola", 23,
                new Eye("Left eye", "kinda red", "blue", false),
                new Eye("Right eye", "ok", "blue", false),
                new Heart("Heart", "ok", 75));
        System.out.println("Name: "+patient.getName()+"\nAge: "+patient.getAge());

        Scanner scan = new Scanner(System.in);


        boolean finish = false;
        while(finish != true) {
            System.out.println("Choose an organ\n\t1. Left eye\n\t2. Right eye\n\t3. Heart\n\t4. Quit");
            int choice = scan.nextInt();
            switch(choice) {
                case 1:
                    patient.getLefteye().details();
                    if(patient.getLefteye().isOpened()) {
                        System.out.println("\n\t1. Close");
                        if(scan.nextInt() == 1) {
                            patient.getLefteye().close();
                        }else {
                            continue;
                        }
                    }else {
                        System.out.println("\n\t1. Open the eye");
                        if(scan.nextInt() == 1) {
                            patient.getLefteye().open();
                        }else {
                            continue;
                        }
                    }
                    break;
                case 2:
                    patient.getRighteye().details();
                    if(patient.getRighteye().isOpened()) {
                        System.out.println("\n\t1. Close");
                        if(scan.nextInt() == 1) {
                            patient.getRighteye().close();
                        }else {
                            continue;
                        }
                    }else {
                        System.out.println("\n\t1. Open the eye");
                        if(scan.nextInt() == 1) {
                            patient.getRighteye().open();
                        }else {
                            continue;
                        }
                    }
                    break;
                case 3:
                    patient.getHeart().details();
                    System.out.println("\n\t1. Change the heart rate");
                    if(scan.nextInt() == 1) {
                        System.out.println("New heart rate");
                        int newh = scan.nextInt();
                        patient.getHeart().changerate(newh);
                    }else {
                        continue;
                    }
                    break;
                default:
                    finish = true;
                    break;
            }
        }

    }
}
