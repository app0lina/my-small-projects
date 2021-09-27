package org.test.com;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Contacts {
    Map<String, Integer> conts = new HashMap<>();
    Scanner sc = new Scanner(System.in);
    public void contFuncs() {
        System.out.println("Managing contacts. \n\t1. Show all \n\t2. Add new\n\t3. Search contact \n\t4. Delete a contact \n\t5. Go back to the previous menu");
        int inpt = sc.nextInt();
        switch(inpt) {
            case 1:
                if(!conts.isEmpty()) {
                    for(String k: conts.keySet()) {
                        String key = k.toString();
                        String value = conts.get(k).toString();
                        System.out.println(key + " " + value);
                    }
                }else {
                    System.out.println("You have no contacts. \n\t1. Add new contact\n\t2. Previous menu");
                    inpt = sc.nextInt();
                    switch (inpt) {
                        case 1: createNew();
                        case 2: contFuncs();
                    }
                }
        }
    }

    public void createNew() {
        System.out.println("Creating new contact.\nName: ");
        String name = sc.next();
        System.out.print("Number: ");
        int num = sc.nextInt();

        conts.put(name, num);
        System.out.println("Added "+name+": "+num);
        contFuncs();
    }
}
