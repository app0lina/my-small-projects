package org.test.com;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class All{
    Scanner sc = new Scanner(System.in);
    static boolean finish = true;
    public void mainfuncs(){
        All all = new All();
        All.Contacts conts = all.new Contacts();
        All.Messages mesag = all.new Messages();

        while(finish) {
            System.out.println("Choose an option: \n\t1. Manage contacts \n\t2. Messages \n\t3. Quit");
            int usopt = sc.nextInt();
            switch (usopt) {
                case 1:
                    conts.contFuncs();
                    break;
                case 2:
                    mesag.mesFuncs();
                    break;
                case 3:
                    finish = false;
                    break;
            }
        }
    }

    class Messages {
        Map<String, String> mes = new HashMap<>();
//            Scanner sc = new Scanner(System.in);

        public void mesFuncs() {
            System.out.println("Messages. \n\t1. See the list of al1 messages \n\t2. Send a new message \n\t3. Go back to the previous menu");

            int inpt = sc.nextInt();

            switch (inpt){
                case 1:
                    if(!mes.isEmpty()){
                        System.out.println("Showing all sent messages");
                        for(String k: mes.keySet()) {
                            String key = k.toString();
                            String value = mes.get(k).toString();
                            System.out.println(key + ": " + value);
                        }
                        mesFuncs();
                    }else {
                        System.out.println("You have no messages.\n\t1. Sent your first message \n\t2. Back");
                        inpt = sc.nextInt();
                        switch (inpt) {
                            case 1: send(); break;
                            case 2: mesFuncs(); break;
                        }
                    }
                    break;
                case 2:
                    send();
                    break;
                case 3:
                    mainfuncs();
                    break;
            }
        }

        public void send() {
            System.out.println("\tTo: ");
            String name = sc.next();
            System.out.println("Your maessage:\n");
            String message = sc.next();

            mes.put(name, message);
            System.out.println("The message to "+name+" was successfully sent. \n\t1. Write again\n\t2. Back");
            int inpt = sc.nextInt();

            //add obrabotchik oshibok?
            switch (inpt) {
                case 1: send(); break;
                case 2: mesFuncs(); break;
            }
        }
    }

    class Contacts {
        Map<String, Integer> conts = new HashMap<>();
        public void contFuncs() {
            System.out.println("Managing contacts. " +
                    "\n\t1. Show all" +
                    "\n\t2. Add new" +
                    "\n\t3. Search contact" +
                    "\n\t4. Delete a contact" +
                    "\n\t5. Go back to the previous menu");
            int inpt = sc.nextInt();
            switch (inpt) {
                case 1:
                    boolean finish = false;
                    while (!finish) {
                        if (!conts.isEmpty()) {
                            System.out.println("Here are all your saved contacts:\n");
                            for (String k : conts.keySet()) {
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
                                case 1:
                                    createNew();
                                    break;
                                case 2:
                                    search();
                                    break;
                                case 3:
                                    del();
                                    break;
                                case 4:
                                    contFuncs();
                                    finish = true;
                                    break;
                                default:
                                    continue;
                            }
                        } else {
                            System.out.println("You have no contacts." +
                                    "\n\t1. Add new contact" +
                                    "\n\t2. Previous menu");
                            inpt = sc.nextInt();
                            switch (inpt) {
                                case 1:
                                    createNew();
                                    break;
                                case 2:
                                    contFuncs();
                                    break;
                            }
                        }
                    }
                    break;
                case 2:
                    createNew();
                    break;
                case 3:
                    search();
                    break;
                case 4:
                    del();
                    break;
                case 5:
                    mainfuncs();
                    break;
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
                case 1:
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
                                break;
                            case 2:
                                contFuncs();
                                break;
                        }
                    }
                    break;
                case 2:
                    contFuncs();
                    break;
            }
        }
    }
}
