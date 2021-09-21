package org.test.com;

public class main {
    public static void main(String[] args) {
        Car merdedes = new Car("mercedes11", 5, "red", new Engine("raneult", 8000));
        Engine engin = merdedes.getEng();
        System.out.println(engin);
    }
}
