package org.test.com;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Contacts {
    Map<String, Integer> conts = new HashMap<>();
    Scanner sc = new Scanner(System.in);
    public void contFuncs() {
        System.out.println("Managing contacts. " +
                "\n\t1. Show all" +
                "\n\t2. Add new" +
                "\n\t3. Search contact" +
                "\n\t4. Delete a contact" +
                "\n\t5. Go back to the previous menu");
        int inpt = sc.nextInt();
        switch(inpt) {
            case 1:
                boolean finish = false;
                while (!finish) {
                    if(!conts.isEmpty()) {
                        System.out.println("Here are all your saved contacts:\n");
                        for(String k: conts.keySet()) {
                            String key = k.toString();
                            String value = conts.get(k).toString();
                            System.out.println(key + ": " + value);
                        }
                        System.out.println("\n" +
                                "\t1. Add new" +
                                "\n\t2. Search contact " +
                                "\n\t3. Delete a contact " +
                                "\n\t4. Go back to the previous menu");
                        inpt = sc.nextInt();
                        switch (inpt) {
                            case 1: createNew();
                            case 2: search();
                            case 3: del();
                            case 4: contFuncs();
                            default: continue;
                        }
                    }else {
                        System.out.println("You have no contacts." +
                                "\n\t1. Add new contact" +
                                "\n\t2. Previous menu");
                        inpt = sc.nextInt();
                        switch (inpt) {
                            case 1: createNew();
                            case 2: contFuncs();
                        }
                    }
                }

                break;
            case 2: createNew();
            case 3: search();
            case 4: del();
            case 5:
        }
    }

    public void del(){
        System.out.println("Write the name of the contact to delete.\n");
        for(String k: conts.keySet()) {
            String key = k.toString();
            String value = conts.get(k).toString();
            System.out.println(key + ": " + value+"\n");
        }
        System.out.print("Name: ");
        String delname = sc.next();
        if(!conts.containsKey(delname)) {
            System.out.println("The name "+delname+" doesn't exist or is written wrong");
            delname = sc.next();
        }else {
            conts.remove(delname);
            System.out.println(delname+" was removed.");
            contFuncs();
        }
    }

    public void createNew() {
        System.out.print("Creating new contact.\nName: ");
        String name = sc.next();
        System.out.print("Number: ");
        boolean numnotint = true;
        int num = sc.nextInt();
        /*while(numnotint) {
            try {
                num = sc.nextInt();
                numnotint = false;
            } catch (InputMismatchException e){
                System.out.println("Number is not a number. WRITE A NUMBER");
                num = sc.nextInt();
            }
        }*/
        //TODO: try catch cheking if the input number is number and not a string
        conts.put(name, num);
        System.out.println("Added "+name+": "+num);
        contFuncs();
    }

    public void search() {
        System.out.println("Search name: \n\t1. Name \n\t2. Previous menu");
        int inpt = sc.nextInt();

        switch (inpt) {
            case 1 -> {
                System.out.print("Search name: ");
                String name = sc.next();
                if (conts.containsKey(name)) {
                    System.out.println("Found! \n" + name + ": " + conts.get(name));
                    contFuncs();
                } else {
                    System.out.println("Nothing found. \n\t1. Search again\n\t2. Previous");
                    inpt = sc.nextInt();
                    switch (inpt) {
                        case 1:
                            search();
                        case 2:
                            contFuncs();
                    }
                }
            }
            case 2 -> contFuncs();
        }
    }
}
