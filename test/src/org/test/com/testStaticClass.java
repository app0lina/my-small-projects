package org.test.com;

public class testStaticClass {

    public static int something = 9;
    public static String name;
    public int age;
    public String nation;

    public testStaticClass(int age, String nation) {
        this.age = age;
        this.nation = nation;
    }

    public void print() {
        System.out.println("printing not static");

    }
    public static void print1() {
        System.out.println("printing");
        print();
    }

    public static String getName() {
        return name;
    }

    public static void setName(String name) {
        testStaticClass.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }
}
